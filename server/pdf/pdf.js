const HTML5ToPDF = require("html5-to-pdf/lib");
const path = require("path");
let start = new Date();
let hrstart = process.hrtime()

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "test.html"),
    outputPath: path.join(__dirname, "output.pdf"),
    templatePath: path.join(
      __dirname,
      "..",
      "..",
      "node_modules",
      "html5-to-pdf",
      "examples",
      "templates",
      "basic"
    )
  });

  await html5ToPDF.start();
  await html5ToPDF.build();
  await html5ToPDF.close();
  let end = new Date() - start;
  let hrend = process.hrtime(hrstart);

  console.info("Execution time: %dms", end);
  console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1] / 1000000);
  console.log(process.hrtime());
  process.exit(0);
};
run();
