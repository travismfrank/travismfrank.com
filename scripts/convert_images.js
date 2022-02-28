const directory = './src/assets/images';
const fs = require('fs');
const sharp = require('sharp');

const widthArr = new Set([650, 800, 1000, 2000]);

fs.readdirSync(directory).forEach(file => {
  if (file !== '.DS_Store') {
    for (const width of widthArr) {
      console.log('file:', file, 'width:', width);
      sharp(`${directory}/${file}`)
       .resize({ width: width })
       .toFile(`${directory}/${file.split('.')[0]}-${width}.jpg`)
       .catch(err => {
        console.log(err);
       });
    }
  }
});
