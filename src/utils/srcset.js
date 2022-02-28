export default function generateSrcset(src) {
  const widthArr = [480, 720, 1080, 3840];
  return widthArr.map(width => {
    return `${src.split('.')[0]}-${width}.jpg ${width}w`;
  }).join(', ');
}
