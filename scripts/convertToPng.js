const sharp = require("sharp");

module.exports.converToPng = async function (id) {
  const src = `./public/${id}/${id}.svg`;
  const dest = `./public/${id}/${id}.png`;

  const img = await sharp(src);
  const resized = await img.resize(1024);
  await resized.toFile(dest);
};
