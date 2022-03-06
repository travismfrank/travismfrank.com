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
      <h1>Original Musicals</h1>
      <div className="musical-selection-wrapper">
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/reprise"}>
            <div className="circle">
              <GiTransfuse className="musical-icon" />
            </div>
            <h3>Reprise</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/super-iron-cooking-chef"}>
            <div className="circle">
              <GiChefToque className="musical-icon" />
            </div>
            <h3>Super Iron</h3>
            <h3>Cooking Chef</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/2084"}>
            <div className="circle">
              <GiCyberEye className="musical-icon" />
            </div>
            <h3>2084</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/mirror-mirror"}>
            <div className="circle">
              <GiMirrorMirror className="musical-icon" />
            </div>
            <h3>Mirror, Mirror</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/emerald-city"}>
            <div className="circle">
              <GiSpaceNeedle className="musical-icon" />
            </div>
            <h3>Emerald City</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/day-one-a-sherlock-story"}>
            <div className="circle">
              <GiSherlockHolmes className="musical-icon" />
            </div>
            <h3>Day One:</h3>
            <h3>A Sherlock Story</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/glitter-a-musical-parody"}>
            <div className="circle">
              <GiPrettyFangs className="musical-icon" />
            </div>
            <h3>Glitter:</h3>
            <h3>A Musical Parody</h3>
          </Link>
        </div>
        <div className="musical-selection-box">
          <Link className="musical-selection" to={"/music/one-acts"}>
            <div className="circle">
              <GiGreekTemple className="musical-icon" />
            </div>
            <h3>One-Acts</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Musicals;
