const watch = require("node-watch");
const execa = require("execa");
const Path = require("path");

const parcelBundler = Path.join(
  __dirname,
  "..",
  "bundler",
  "parcel-bundler.js"
);

const parcelConfig = Path.join(__dirname, "config", "parcel-config.json");

let parcelRun = async () => {
  const subprocess = execa("node", [parcelBundler]);
  await subprocess.stdout.pipe(process.stdout);

  try {
    // watch([parcelBundler, parcelConfig], { recursive: true }, function(event) {
    if (event === "update") {
      // Kill and Restart Parcel
      subprocess.kill("SIGTERM", {
        forceKillAfterTimeout: 2000
      });
      parcelRun();
      return false;
    }
    // });
  } catch (error) {
    if (subprocess.killed || error.isCanceled) {
      console.log(`subprocess.killed ${subprocess.killed}`); // true
      console.log(`error.isCanceled ${error.isCanceled}`); // true
    }
  }
};

parcelRun();
