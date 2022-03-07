export default function generateSrcmap(glob, imageDir, assetName, imageExt) {
  const widthArr = [480, 720, 1080, 3840];
  return widthArr.reduce((map, width) => {
    map[width] = glob[imageDir + assetName + '-' + width + imageExt].default;
    return map;
  }, {});
}
