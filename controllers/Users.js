import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Confirm Password Does Not Match" });
  }

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await Users.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    // Buat hashed password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Buat entri baru di database
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.json({ msg: "Registration Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error registering user" });
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "Email not found" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );
    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Redirect to dashboard with the access token
    res.json({ accessToken, redirectUrl: "/dashboard" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "An error occurred during login" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
