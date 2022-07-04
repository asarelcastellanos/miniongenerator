const sharp = require("sharp");

module.exports.converToPng = async function (id, name) {
  const src = `./public/${id}/${name}.svg`;
  const dest = `./public/${id}/${name}.png`;

  const img = await sharp(src);
  const resized = await img.resize(1024);
  await resized.toFile(dest);
};
