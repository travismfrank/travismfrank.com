import { GiChargingBull, GiJigsawPiece } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import './OpenSource.css';

function OpenSource() {
  return (
    <div className="open-source-wrapper">
      <h1>Open Source</h1>
      <div className="open-source-content">
        <div className="open-source-heading">
          <GiChargingBull /><h2>Obsidian</h2>
        </div>
        <p>
          I am a founding contributor of <a href="https://github.com/open-source-labs/obsidian" target="_blank">Obsidian</a>,
          Deno's first native GraphQL caching layer. I now serve the Obsidian community in an advisory role, mentoring active
          contibutors. Check out my v1.0 <a href="https://medium.com/p/6f97a31f4af3" target="_blank">announcement post (2020)</a> or read
          the <a href="http://obsidian.land" target="_blank">docs</a>.
        </p>
        <div />
        <div className="open-source-heading">
          <GiJigsawPiece /><h2>travismfrank</h2>
        </div>
        <p>
          This site is open source! Browse the <a href="https://github.com/TravisFrankMTG/travismfrank" target="_blank">code</a> (I'd
          love PRs) or read <Link to={"/writing/feed"}>my post</Link> about the build.
        </p>
      </div>
    </div>
  );
}

export default OpenSource;
