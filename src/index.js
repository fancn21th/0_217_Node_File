#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const fileName = "data.json";

const filePath = path.join(process.cwd(), "./.data", fileName);

// write file with fileDescriptor in callback style

/**
r+ open the file for reading and writing, if file doesn't exist it won't be
created.

w+ open the file for reading and writing, positioning the stream at the
beginning of the file. The file is created if not existing.

a open the file for writing, positioning the stream at the end of the file.
The file is created if not existing.

a+ open the file for reading and writing, positioning the stream at the
end of the file. The file is created if not existing. 
 */

fs.open(filePath, "a", (error, fileDescriptor) => {
  if (!error && fileDescriptor) {
    const data = "hello";
    fs.writeFile(fileDescriptor, data, (error) => {
      if (!error) {
        fs.close(fileDescriptor, (error) => {
          console.error({ error });
        });
      }
    });
  } else {
    console.error({ error });
  }
});
