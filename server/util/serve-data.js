// psuedocode
// 1. Find all folders within YamlDatabase
// 2. Look for yaml files within each folders
// 3. merge yaml files onto global yaml file.
const express = require("express");
const router = express.Router();
// const fs = require("fs");

const { join } = require("path");
const { readdir, stat, readFile } = require("fs").promises;
let defaultPath = "./yamlData/";
const jsYaml = require("js-yaml");

const yamlWrite = require("write-yaml");

module.exports = async function loadFolders(path = defaultPath) {
  let dirs = [];
  //  Find all folders in 'yamlData' folder
  for (const folder of await readdir(path)) {
    if ((await stat(join(path, folder))).isDirectory())
      dirs = [...dirs, folder];
  }
  //   Build first part of FileMap
  let fileMap = {};
  for (let key of dirs) {
    fileMap[key] = {};
    let filepath = join(path, key);
    for (const file of await readdir(filepath)) {
      if ((await stat(join(filepath, file))).isFile()) {
        // fileMap[key][file.split(".")[0]] = {};
        try {
          let fileRead = await jsYaml.load(
            (await readFile(join(filepath, file), "utf8")) + ""
          );
          //   console.log(fileRead);
          fileMap[key][file.split(".")[0]] = JSON.parse(
            JSON.stringify(fileRead)
          );
          //   console.log(data);

          //   return data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  // Find all yaml files in each folder

  // Load Yaml files and convert to json

  return fileMap;
};
