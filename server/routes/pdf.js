const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const RenderPDF = require("chrome-headless-render-pdf");

// Set Host
let hosts = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "config", "express-config.json"))
);
let host;
if (process.env.NODE_ENV === "development") host = hosts.dev;
else host = hosts.prod;

// Live render pdf route.
router.get("/render/:id", function (req, res) {
  let id = req.params.id;
  let start = new Date();
  let hrstart = process.hrtime();

  RenderPDF.generatePdfBuffer(`${host}/resume/${id}`).then((pdfBuffer) => {
    console.log(pdfBuffer);
    res.contentType("application/pdf");
    res.send(pdfBuffer);
    let end = new Date() - start;
    let hrend = process.hrtime(hrstart);

    console.info("Execution time: %dms", end);
    console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1] / 1000000);
  });
});
// Debug Route
router.get("/render/:id/debug", function (req, res) {
  let id = req.params.id;
  let start = new Date();
  let hrstart = process.hrtime();

  res.json({ id, host, pdf: `${host}/resume/${id}` });
});
// Download Route
router.get("/dl/:id", function (req, res) {
  let id = req.params.id;
  let start = new Date();
  let hrstart = process.hrtime();
  let simulateTime = 5;

  RenderPDF.generatePdfBuffer(`${host}/resume/${id}`).then((pdfBuffer) => {
    console.log(pdfBuffer);
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; resume.pdf",
      "Content-Length": pdfBuffer.length
    });
    res.end(pdfBuffer);
    let end = new Date() - start;
    let hrend = process.hrtime(hrstart);

    console.info("Execution time: %dms", end);
    console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1] / 1000000);
  });
});
// Test Route
router.get("/test", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "..", "test.pdf"));
});
module.exports = router;
