import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
      {reelData.reels.map(reel => {
        return (
          <div className="reel-wrapper" key={reel.title}>
            <h2 className="reel-title">{reel.title}</h2>
            <p className="reel-genre">{reel.genre}</p>
            <div className="reel-video-wrapper">
              <iframe
                className="reel-video"
                src={reel.videoLink}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {reel.credits.map(role => {
              return (
                <p key={role.title}><b>{role.title}</b> - {role.name}</p>
              );
            })}
          </div>
        );
      })}
    </BannerShell>
  );
}

export default Reel;
