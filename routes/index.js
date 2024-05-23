import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import {
  createAcehMenu,
  getAcehMenu,
  deleteAcehMenu,
} from "../controllers/AcehController.js";
import {
  createSumateraUtaraMenu,
  getSumateraUtaraMenu,
  deleteSumateraUtaraMenu,
} from "../controllers/SumateraUtaraController.js";
import {
  createSumateraSelatanMenu,
  getSumateraSelatanMenu,
  deleteSumateraSelatanMenu,
} from "../controllers/SumateraSelatanController.js";
import {
  createSumateraBaratMenu,
  getSumateraBaratMenu,
  deleteSumateraBaratMenu,
} from "../controllers/SumateraBaratController.js";
import {
  createBengkuluMenu,
  getBengkuluMenu,
  deleteBengkuluMenu,
} from "../controllers/BengkuluController.js";
import {
  createRiauMenu,
  getRiauMenu,
  deleteRiauMenu,
} from "../controllers/RiauController.js";
import {
  createKepulauanRiauMenu,
  getKepulauanRiauMenu,
  deleteKepulauanRiauMenu,
} from "../controllers/KepulauanRiauController.js";
import {
  createJambiMenu,
  getJambiMenu,
  deleteJambiMenu,
} from "../controllers/JambiController.js";
import {
  createLampungMenu,
  getLampungMenu,
  deleteLampungMenu,
} from "../controllers/LampungController.js";
import {
  createBangkaBelitungMenu,
  getBangkaBelitungMenu,
  deleteBangkaBelitungMenu,
} from "../controllers/BangkaBelitungController.js";
import {
  createBantenMenu,
  getBantenMenu,
  deleteBantenMenu,
} from "../controllers/BantenController.js";
import {
  createJakartaMenu,
  getJakartaMenu,
  deleteJakartaMenu,
} from "../controllers/JakartaController.js";
import {
  createJawaBaratMenu,
  getJawaBaratMenu,
  deleteJawaBaratMenu,
} from "../controllers/JawaBaratController.js";
import {
  createJawaTengahMenu,
  getJawaTengahMenu,
  deleteJawaTengahMenu,
} from "../controllers/JawaTengahController.js";
import {
  createJawaTimurMenu,
  getJawaTimurMenu,
  deleteJawaTimurMenu,
} from "../controllers/JawaTimurController.js";
import {
  createYogyakartaMenu,
  getYogyakartaMenu,
  deleteYogyakartaMenu,
} from "../controllers/YogyakartaController.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.post("/aceh", createAcehMenu);
router.get("/aceh", getAcehMenu);
router.delete("/aceh/:id", deleteAcehMenu);

router.post("/sumaterautara", createSumateraUtaraMenu);
router.get("/sumaterautara", getSumateraUtaraMenu);
router.delete("/sumaterautara/:id", deleteSumateraUtaraMenu);

router.post("/sumateraselatan", createSumateraSelatanMenu);
router.get("/sumateraselatan", getSumateraSelatanMenu);
router.delete("/sumateraselatan/:id", deleteSumateraSelatanMenu);

router.post("/sumaterabarat", createSumateraBaratMenu);
router.get("/sumaterabarat", getSumateraBaratMenu);
router.delete("/sumaterabarat/:id", deleteSumateraBaratMenu);

router.post("/bengkulu", createBengkuluMenu);
router.get("/bengkulu", getBengkuluMenu);
router.delete("/bengkulu/:id", deleteBengkuluMenu);

router.post("/riau", createRiauMenu);
router.get("/riau", getRiauMenu);
router.delete("/riau/:id", deleteRiauMenu);

router.post("/kepulauanriau", createKepulauanRiauMenu);
router.get("/kepulauanriau", getKepulauanRiauMenu);
router.delete("/kepulauanriau/:id", deleteKepulauanRiauMenu);

router.post("/jambi", createJambiMenu);
router.get("/jambi", getJambiMenu);
router.delete("/jambi/:id", deleteJambiMenu);

router.post("/lampung", createLampungMenu);
router.get("/lampung", getLampungMenu);
router.delete("/lampung/:id", deleteLampungMenu);

router.post("/bangkabelitung", createBangkaBelitungMenu);
router.get("/bangkabelitung", getBangkaBelitungMenu);
router.delete("/bangkabelitung/:id", deleteBangkaBelitungMenu);

router.post("/banten", createBantenMenu);
router.get("/banten", getBantenMenu);
router.delete("/banten/:id", deleteBantenMenu);

router.post("/jakarta", createJakartaMenu);
router.get("/jakarta", getJakartaMenu);
router.delete("/jakarta/:id", deleteJakartaMenu);

router.post("/jawabarat", createJawaBaratMenu);
router.get("/jawabarat", getJawaBaratMenu);
router.delete("/jawabarat/:id", deleteJawaBaratMenu);

router.post("/jawatengah", createJawaTengahMenu);
router.get("/jawatengah", getJawaTengahMenu);
router.delete("/jawatengah/:id", deleteJawaTengahMenu);

router.post("/jawatimur", createJawaTimurMenu);
router.get("/jawatimur", getJawaTimurMenu);
router.delete("/jawatimur/:id", deleteJawaTimurMenu);

router.post("/yogyakarta", createYogyakartaMenu);
router.get("/yogyakarta", getYogyakartaMenu);
router.delete("/yogyakarta/:id", deleteYogyakartaMenu);

// Rute untuk menampilkan halaman login dan register
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

// Endpoint untuk halaman dashboard
router.get("/dashboard", verifyToken, (req, res) => {
  res.render("dashboard");
});

export default router;
