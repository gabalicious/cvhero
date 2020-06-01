const express = require("express");
const router = express.Router();
const jsYaml = require("js-yaml");
const fs = require("fs");
const yamlWrite = require("write-yaml");
const jsonDiff = require("json-diff");

function writeYaml(data, file) {
  yamlWrite(file, data, function () {});
}

function setNewData({ reqBody, oldData, keyValues, keyValueCount }) {
  let newData = {};
  let merge = {};
  // console.log(keyValues);
  let { level_one, level_two, level_three, isArray } = keyValues;
  if (isArray) {
    console.log("0");

    // console.log(oldData, level_one, level_two, level_three);
    newData = [...oldData];

    keyValueCount === 4
      ? (newData[level_one][level_two][level_three] = reqBody.data)
      : (newData[level_one][level_two] = reqBody.data);
  } else if (keyValueCount === 1) {
    console.log(1);

    merge[level_one] = reqBody.data;
    newData = { ...oldData, ...merge };
  } else if (keyValueCount === 2) {
    console.log(2);

    merge[level_one] = { ...oldData[level_one] };
    merge[level_one][level_two] = reqBody.data;
    newData = { ...oldData, ...merge };
  } else if (keyValueCount === 3) {
    console.log(3);
    // console.log("oldData first read: ", oldData["0"]);
    merge = { ...{}, ...oldData };
    // console.log("oldData second read: ", oldData["0"]);

    merge[level_one][level_two][level_three] = String(reqBody.data);

    // console.log("oldData third read: ", oldData["0"]);

    newData = { ...oldData, ...merge };
  }
  return newData;
}

// Checks if editable is uses key_value or key_values.  Returns new data and diff.
function mergeData({ reqBody }, oldData) {
  console.log("\nreqBody: ", reqBody, "\noldData: ", oldData);
  let newData = {};
  let merge = {};

  let { keyValue, keyValues } = reqBody;
  keyValues = keyValues || { level_one: keyValue };

  let { level_one, level_two, level_three, isArray } = keyValues;
  let keyValueCount = Object.keys(keyValues).length;
  newData = setNewData({
    oldData,
    reqBody,
    keyValues,
    keyValueCount
  });
  if (isArray) {
    console.log("0");

    // console.log(oldData, level_one, level_two, level_three);
    newData = [...oldData];

    keyValueCount === 4
      ? (newData[level_one][level_two][level_three] = reqBody.data)
      : (newData[level_one][level_two] = reqBody.data);
  } else if (keyValueCount === 1) {
    //  reqBody.data;

    console.log("\nreqBody: ", reqBody, "\noldData: ", oldData);
  } else if (keyValueCount === 2) {
    let { level_one, level_two } = reqBody.keyValues;
    merge[level_one] = { ...oldData[level_one] };
    merge[level_one][level_two] = reqBody.data;
    newData = { ...oldData, ...merge };
  } else if (keyValueCount === 3) {
    let { level_one, level_two, level_three } = reqBody.keyValues;
    merge[level_one] = { ...oldData[level_one] };
    merge[level_one][level_two][level_three] = reqBody.data;
    newData = { ...oldData, ...merge };
  }
  return newData;
}

router.post("/save2", function (req, res) {
  // Get document, or throw exception on error
  let dir = process.cwd();
  let { directory, filename, keyValue, keyValues } = req.body;
  let file = dir + `/yamlData/${directory}/${filename}`;
  keyValues = keyValues || { level_one: keyValue };
  let { isArray } = keyValues;

  console.log(file);
  try {
    let oldData = jsYaml.safeLoad(fs.readFileSync(file, "utf8"));
    let newData = mergeData(
      {
        reqBody: req.body,
        file
      },
      oldData
    );
    // reset oldData

    // let diff = jsonDiff.diff(oldData, newData);
    oldData = jsYaml.safeLoad(fs.readFileSync(file, "utf8"));

    let diff = isArray
      ? jsonDiff.diff({ ...oldData }, { ...newData })
      : jsonDiff.diff(oldData, newData);
    console.log("oldData: ", oldData);
    console.log("newData: ", newData);

    console.log("diff: ", diff);
    if (diff) writeYaml(newData, file);
    res.send(newData);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
