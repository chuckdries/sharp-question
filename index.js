const sharp = require("sharp");

async function getDominantHue(path) {
  const {
    dominant: { r, g, b },
  } = await sharp(path).stats();
  console.log(`rgb(${r}, ${g}, ${b})`);
}

getDominantHue("./images/_DSC5896.jpg");
getDominantHue("./images/DSC02610.jpg");
