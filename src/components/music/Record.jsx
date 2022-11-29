import { useState } from 'react';
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
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';

// Travis's favorite BC tunes
const TRAVISS_FAVORITES = [
  'So Long',
  'The Wheel Keeps Spinning',
  'Charlotte & Roger',
  'Papieren Vliegtuigje',
  'Take A Walk',
  'Aphrodite',
  'Girl with a Pearl Earring',
  'Warm Sunglow',
  'When She Played The Piano',
  'Epilogue: Warrior'
];

function Record() {
  const [sortBy, setSortBy] = useState('favorites');

  const { recordName } = useParams();
  const recordData = recordJSON['./../../assets/records/' + recordName + '.json'];

  const bannerImageUrl = recordImages['./../../assets/images/records/' + recordName + '.jpg'].default;
  const bannerSrcmap = generateSrcmap(
    recordImages,
    './../../assets/images/records/',
    recordName,
    '.jpg'
  );

  const tuneComponents = recordData.tunes.map(tune => {
    return (
      <div className="tune-wrapper" key={tune.title} title={tune.title} date={tune.date} genre={tune.genre}>
        <h2 className="tune-title">{tune.title}</h2>
        {tune.date && <p className="tune-date">{tune.date}</p>}
        <p className="tune-artist">{tune.artist}</p>
        <AudioPlayer src={recordAudio['./../../assets/audio/' + tune.asset + '.mp3'].default}/>
      </div>
    );
  });

  // BC has tunes sorted by genre & Travis's favorites
  const tuneGenreMap = {};
  const tuneFavoritesMap = { favorites: [], others: [] };

  if (recordName === 'breakout-chronicles') {
    tuneComponents.forEach(tuneComponent => {
      // Sort by genre
      if (tuneGenreMap[tuneComponent.props.genre]) {
        tuneGenreMap[tuneComponent.props.genre].push(tuneComponent);
      } else {
        tuneGenreMap[tuneComponent.props.genre] = [tuneComponent];
      }

      // Sort into favorite / others
      if (TRAVISS_FAVORITES.includes(tuneComponent.props.title)) {
        tuneFavoritesMap.favorites.push(tuneComponent);
      } else {
        tuneFavoritesMap.others.push(tuneComponent);
      }
    });
  }

  return (
    <BannerShell bannerSrc={bannerImageUrl}
      srcMap={bannerSrcmap}
      titleText={recordData.title}
    >
      {/* Include sorting capability for BC */}
      {recordName === 'breakout-chronicles' ? (
        <>
          <div className="sort-by-wrapper">
            <p>
              Sort by:
              <select className="sort-by-select" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                <option value="favorites">Travis's Favorites</option>
                <option value="date">Release Date</option>
                <option value="genre">Genre</option>
              </select>
            </p>
          </div>
          {sortBy === 'favorites' && (
            <>
              <SectionToggle open={true} sectionTitle={"Travis's Favorites"}>
                {tuneFavoritesMap.favorites}
              </SectionToggle>
              <SectionToggle open={true} sectionTitle={"Others"}>
                {tuneFavoritesMap.others}
              </SectionToggle>
            </>
          )}
          {sortBy === 'date' && tuneComponents}
          {sortBy === 'genre' && (
            <>
              {Object.keys(tuneGenreMap).map(genre => (
                <SectionToggle open={false} sectionTitle={genre}>
                  {tuneGenreMap[genre]}
                </SectionToggle>
              ))}
            </>
          )}
        </>
      ) : tuneComponents}
    </BannerShell>
  );
}

export default Record;
