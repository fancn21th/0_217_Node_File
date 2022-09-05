#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const fileName = "data.json";

const filePath = path.join(process.cwd(), "./.data", fileName);

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  const status = {
    isFile: stats.isFile(), // true
    isDirectory: stats.isDirectory(), // false
    isSymbolicLink: stats.isSymbolicLink(), // false
    size: stats.size, // 1024000 //= 1MB
  };

  console.log({ status });
});
