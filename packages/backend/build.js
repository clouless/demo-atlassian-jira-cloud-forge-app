/* BUILD.JS FOR BACKEND WITH SANITY CHECKS */
const path = require("path");
const fs = require("fs");

const baseDir = path.resolve(__dirname);

let exitCode = 0;
if (
  fs.existsSync(path.resolve(baseDir + "/static/generated-frontend/index.html"))
) {
  console.log("SUCCESS: generated-frontend exists");
} else {
  console.err(
    'ERROR  : generated-frontend DOES NOT exist => go to packages/frontend and run "npm run build"'
  );
  exitCode = 2;
}

process.exit(exitCode);
