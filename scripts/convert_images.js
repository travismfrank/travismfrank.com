const directory = './src/assets/images/to_convert';
const fs = require('fs');
const sharp = require('sharp');

const widthArr = new Set([480, 720, 1080, 3840]);

fs.readdirSync(directory).forEach(file => {
  if (file !== '.DS_Store') {
    for (const width of widthArr) {
      console.log('file:', file, 'width:', width);
      sharp(`${directory}/${file}`)
       .resize({ width: width })
       .jpeg({ progressive: true })
       .toFile(`${directory}/${file.split('.')[0]}-${width}.jpg`)
       .catch(err => {
        console.log(err);
       });
    }
  }
});
