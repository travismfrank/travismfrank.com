export default function generateSrcset(srcMap) {
  const widthArr = [480, 720, 1080, 3840];
  return widthArr.map(width => {
    return `${srcMap[width]} ${width}w`;
  }).join(', ');
}
