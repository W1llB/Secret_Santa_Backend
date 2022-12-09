import express from "express";
import { getMembersByGroupName } from "../models/index.js";
const router = express.Router();

router.get("/", async function (req, res) {
    console.log(req.body.groupName)
    const result = await getMembersByGroupName(req.body.groupName);
    // if (result == undefined) {
    //   return res.json({ success: false });
    // }
    return res.json({ success: true, payload: result });
  });


export {router};