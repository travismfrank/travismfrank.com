import { Link } from 'react-router-dom';

import './OpenSource.css';

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';

// Import images
const openSourceImages = import.meta.globEager('./../../assets/images/open_source/*');

function OpenSource() {
  const openSourceImageUrl = openSourceImages['./../../assets/images/open_source/open-source.jpg'].default;
  const openSourceSrcmap = generateSrcmap(
    openSourceImages,
    './../../assets/images/open_source/',
    'open-source',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={openSourceImageUrl}
      srcMap={openSourceSrcmap}
      titleText="Open Source"
    >
      <SectionToggle open={true} sectionTitle="HyperDurable">
        <p>
          I am the builder and maintainer of <a href="https://github.com/ticket-bridge/hyper-durable" target="_blank">HyperDurable</a>,
          an abstraction for <a href="https://developers.cloudflare.com/workers/runtime-apis/durable-objects/" target="_blank">Durable Objects</a> to
          enable natural, object-like access to underlying persistent storage. Like RPC, for Durable Objects.
        </p>
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="Obsidian">
        <p>
          I am a founding contributor of <a href="https://github.com/open-source-labs/obsidian" target="_blank">Obsidian</a>,
          Deno's first native GraphQL caching layer. I now serve the Obsidian community in an advisory role, mentoring active
          contibutors. Check out my v1.0 <a href="https://medium.com/p/6f97a31f4af3" target="_blank">announcement post (2020)</a> or read
          the <a href="http://obsidian.land" target="_blank">docs</a>.
        </p>
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="travismfrank">
        <p>
          This site is open source! Browse the <a href="https://github.com/TravisFrankMTG/travismfrank" target="_blank">code</a> (I'd
          love PRs) or read <Link to={"/writing/2022-03-24_building-this-site"}>my post</Link> about the build.
        </p>
      </SectionToggle>
      <div className="divider" />
      <p>
        If you want to support my open source work, sponsor me on GitHub by clicking the button below! I'm open to running workshops for your
        team, joining your chat app, or even speaking at your conference. Let's make open source together.
      </p>
      <iframe id="sponsorButton" src="https://github.com/sponsors/TravisFrankMTG/button" title="Sponsor TravisFrankMTG" height="35" width="116" style={{border: "0"}}></iframe>
    </BannerShell>
  );
}

export default OpenSource;
