import express from "express";
import { getMembersByGroupName, addGroup } from "../models/index.js";
const router = express.Router();

router.get("/", async function (req, res) {
  console.log(req.body.payload);
  //   const result = await getMembersByGroupName(req.body.payload);
  // if (result == undefined) {
  //   return res.json({ success: false });
  // }
  return res.json({ success: true, payload: "Hello" });
});

router.post("/", async function (req, res) {
  console.log(req.body.payload);
  const result = await addGroup(req.body.payload);
  // if (result == undefined) {
  //   return res.json({ success: false });
  // }
  return res.json({ success: true, payload: result });
});

export { router };
