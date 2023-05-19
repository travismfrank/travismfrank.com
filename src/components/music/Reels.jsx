import './Reels.css';

import ImageLink from '../shells/ImageLink';

import generateSrcmap from '../../utils/srcmap';

// Import images
export const reelImages = import.meta.glob('../../assets/images/reels/*', {
  eager: true,
});

function Reels() {
  const reels = [
    {
      "title": "Conducting",
      "id": "conducting"
    },
    {
      "title": "Piano",
      "id": "piano"
    }
  ];

  return (
    <div className="reels-wrapper">
      <div className="header">
        <h1 className="reels-title">Live Reels</h1>
      </div>
      <div className="header spacer" />
      <div className="reel-selection-wrapper">
        {reels.map(reel => {
          const reelImageUrl = reelImages['../../assets/images/reels/' + reel.id + '.jpg'].default;
          const reelSrcmap = generateSrcmap(
            reelImages,
            '../../assets/images/reels/',
            reel.id,
            '.jpg'
          );

          return (
            <ImageLink
              imageSrcmap={reelSrcmap}
              imageUrl={reelImageUrl}
              link={reel.id}
              title={reel.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reels;
