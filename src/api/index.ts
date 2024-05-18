import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./crud";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/crud", emojis);

export default router;
