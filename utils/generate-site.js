const fs = require("fs");

// Write File to Output Folder (/dist)
const writeFile = (siteContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", siteContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Site HTML created! Please check ./dist folder.",
      });
    });
  });
};

// Copy Stylesheet to Output Folder (/dist)
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Stylesheet created! Please check ./dist folder.",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
