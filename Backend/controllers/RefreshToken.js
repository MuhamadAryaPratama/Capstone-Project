import jwt from "jsonwebtoken";
import Users from "../models/UserModel.js";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await Users.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);

        const userId = user.id;
        const name = user.name;
        const email = user.email;
        const newAccessToken = jwt.sign(
          { userId, name, email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "20s" }
        );

        res.json({ accessToken: newAccessToken });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "An error occurred during token refresh" });
  }
};
