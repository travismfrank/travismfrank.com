import { Link } from 'react-router-dom';

import './Leadership.css';

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';

// Import images
const leadershipImages = import.meta.globEager('./../../assets/images/about/leadership/*');

function Leadership() {
  const leadershipImageUrl = leadershipImages['./../../assets/images/about/leadership/leadership.jpg'].default;
  const leadershipSrcmap = generateSrcmap(
    leadershipImages,
    './../../assets/images/about/leadership/',
    'leadership',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={leadershipImageUrl}
      srcMap={leadershipSrcmap}
      titleText="Leadership"
    >
      <p className="leadership-preamble">
        In <i>Emerald City</i>, I wrote: "The greatest moments of all / are those
        that makes us feel small". Every company and orchestra I found reveals
        that truth again and again. Sorrounding myself with dedicated,
        awe-inspiring people makes me feel small in the best way I can imagine.
      </p>
      <SectionToggle open={false} sectionTitle="Obsidian (2020-2021)">
        <p>
          I am a founding contributor of <a href="https://github.com/open-source-labs/obsidian" target="_blank">Obsidian</a>,
          Deno's first native GraphQL caching layer. Since building and shipping v1.0
          I have moved into an advisory role, mentoring active contributors.
        </p>
      </SectionToggle>
      <SectionToggle
        open={false}
        sectionTitle="The Frank-Nilsson Contemporary Jazz Orchestra (2018-2019)"
      >
        <p>
          I co-founded <Link to="/music/records/sketching-the-sky">The Frank-Nilsson Contemporary Jazz Orchestra</Link> (CJO)
          with my good friend <a href="https://www.allanknilsson.com/" target="_blank">Allan Nilsson</a>.
          CJO was comprised of eighteen instrumentalists and performed exclusively
          my and Allan's original works, with the two of us taking the role of
          bandleader for our own tunes.
        </p>
      </SectionToggle>
      <SectionToggle open={false} sectionTitle="Black Tie Productions (2012-2016)">
        <p>
          I founded <Link to="/music/musicals">Black Tie Productions</Link>, a youth theatre
          company that produced original musicals written, directed, and performed entirely
          by high school students. I led the company as Executive Producer and Artistic Director
          for three years, across five original musicals, eight productions, and thousands of
          ticket sales. After stepping down, I continued to advise another year of productions
          and organize fundraising.
        </p>
      </SectionToggle>
      <p>
        My experiences as a music director and conductor have been important contributions
        to my journey as a leader. Further music director and conductor credits are
        available <Link to="/music/theatre-credits">here</Link>.
      </p>
    </BannerShell>
  );
}

export default Leadership;
