const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Set Host
let hosts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "config", "express-config.json"))
);
let host;
if (process.env.NODE_ENV === "development") host = hosts.dev;
else host = hosts.prod;

// Data for app.
router.get("/users/:user_id/resumes/:resume_id", function (req, res) {
  let resume_id = Number(req.params.resume_id);
  let user_id = Number(req.params.user_id)
  console.log("resume_id: ", resume_id)
  console.log("user_id: ", user_id)
  res.send({ resume_id, user_id });

});

// Test Route
router.get("/test", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "test.pdf"));
});
module.exports = router;
