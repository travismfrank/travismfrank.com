import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

import './Record.css';

// Import record data
const recordJSON = import.meta.globEager('./../../assets/records/*.json');

// Import images
import { recordImages } from './Records';

// Import audio
const recordAudio = import.meta.globEager('./../../assets/audio/*.mp3');

import AudioPlayer from '../shells/AudioPlayer';
import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

function Record() {
  const { recordName } = useParams();
  const recordData = recordJSON['./../../assets/records/' + recordName + '.json'];

  const bannerImageUrl = recordImages['./../../assets/images/records/' + recordName + '.jpg'].default;
  const bannerSrcmap = generateSrcmap(
    recordImages,
    './../../assets/images/records/',
    recordName,
    '.jpg'
  );

  return (
    <BannerShell bannerSrc={bannerImageUrl}
      srcMap={bannerSrcmap}
      titleText={recordData.title}
    >
      {recordData.tunes.map(tune => {
        return (
          <div className="tune-wrapper" key={tune.title}>
            <h2 className="tune-title">{tune.title}</h2>
            <p className="tune-artist">{tune.artist}</p>
            <AudioPlayer src={recordAudio['./../../assets/audio/' + tune.asset + '.mp3'].default}/>
          </div>
        );
      })}
    </BannerShell>
  );
}

export default Record;
