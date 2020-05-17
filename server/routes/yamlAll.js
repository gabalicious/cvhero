const express = require("express");
const router = express.Router();
const loadFolders = require("../util/serve-data");

// Download Route
router.get("/yamlall", function(req, res) {
  let yamlAll;
  loadFolders().then(folders => {
    yamlAll = JSON.stringify(folders);
    res.end(yamlAll);
  });
});
module.exports = router;
