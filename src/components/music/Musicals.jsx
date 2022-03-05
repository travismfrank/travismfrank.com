import {
  GiChefToque,
  GiCyberEye,
  GiGreekTemple,
  GiMirrorMirror,
  GiPrettyFangs,
  GiSherlockHolmes,
  GiSpaceNeedle,
  GiTransfuse
} from 'react-icons/gi';
import { Link } from 'react-router-dom';

import './Musicals.css';

function Musicals() {
  return (
    <div className="musicals-wrapper">
      <div className="musical-selection-wrapper">
        <h1>Original Musicals</h1>
        <div className="musical-selection">
          <GiTransfuse className="musical-icon" />
          <h3>Reprise</h3>
        </div>
        <div className="musical-selection">
          <GiChefToque className="musical-icon" />
          <h3>Super Iron Cooking Chef</h3>
        </div>
        <div className="musical-selection">
          <GiCyberEye className="musical-icon" />
          <h3>2084</h3>
        </div>
        <div className="musical-selection">
          <GiMirrorMirror className="musical-icon" />
          <h3>Mirror, Mirror</h3>
        </div>
        <div className="musical-selection">
          <GiSpaceNeedle className="musical-icon" />
          <h3>Emerald City</h3>
        </div>
        <div className="musical-selection">
          <GiSherlockHolmes className="musical-icon" />
          <h3>Day One: A Sherlock Story</h3>
        </div>
        <div className="musical-selection">
          <GiPrettyFangs className="musical-icon" />
          <h3>Glitter: A Musical Parody</h3>
        </div>
        <div className="musical-selection">
          <GiGreekTemple className="musical-icon" />
          <h3>One-Acts</h3>
        </div>
      </div>
    </div>
  );
}

export default Musicals;
