import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import './Reel.css';

// Import reel data
const reelJSON = import.meta.globEager('./../../assets/reels/*.json');

// Import images
import { reelImages } from './Reels';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

function Reel() {
  const { reelName } = useParams();
  const reelData = reelJSON['./../../assets/reels/' + reelName + '.json'];

  const bannerImageUrl = reelImages['./../../assets/images/reels/' + reelName + '.jpg'].default;
  const bannerSrcmap = generateSrcmap(
    reelImages,
    './../../assets/images/reels/',
    reelName,
    '.jpg'
  );

  return (
    <BannerShell bannerSrc={bannerImageUrl}
      srcMap={bannerSrcmap}
      titleText={reelData.title}
    >
      {reelData.reels.map((reel, index) => {
        return (
          <div className="reel-wrapper" key={reel.title}>
            <h2 className="reel-title">{reel.title}</h2>
            <p className="reel-genre">{reel.genre}</p>
            <div className="reel-video-wrapper">
              <ReactPlayer
                className="reel-video"
                url={reel.videoLink}
                width="320px"
                height="160px"
                controls={true}
              />
            </div>
            {reel.credits.map(role => {
              return (
                <p key={role.title}><b>{role.title}</b> - {role.name}</p>
              );
            })}
            {index < reelData.reels.length - 1 && <hr />}
          </div>
        );
      })}
    </BannerShell>
  );
}

export default Reel;
