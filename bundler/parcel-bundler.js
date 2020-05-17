const Bundler = require("parcel-bundler");
const Path = require("path");

const entryFiles = [Path.join(__dirname, "..", "src", "index.html")];
// Include Bundler options
const { options } = require(Path.join(
  __dirname,
  "..",
  "config",
  "parcel-config.json"
));
let bundler;
let bundle;

(async function() {
  bundler = new Bundler(entryFiles, options);
  bundle = await bundler.bundle();
})();

bundler.on("bundled", bundle => {
  console.log("✅  Parcel Build Completed...");
});

bundler.on("buildStart", entryPoints => {
  console.log("🔥  Parcel Build Started...");
});
