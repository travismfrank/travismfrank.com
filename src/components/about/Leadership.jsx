import './Leadership.css';
import leadershipImageUrl from '../../assets/images/leadership.jpg';
import leadershipImageUrl480 from '../../assets/images/leadership-480.jpg';
import leadershipImageUrl720 from '../../assets/images/leadership-720.jpg';
import leadershipImageUrl1080 from '../../assets/images/leadership-1080.jpg';
import leadershipImageUrl3840 from '../../assets/images/leadership-3840.jpg';
import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';

function Leadership() {
  return (
    <BannerShell
      bannerSrc={leadershipImageUrl}
      srcMap={{
        480: leadershipImageUrl480,
        720: leadershipImageUrl720,
        1080: leadershipImageUrl1080,
        3840: leadershipImageUrl3840
      }}
      titleText="Leadership"
    >
      <p className="leadership-preamble">
        In <i>Emerald City</i>, I wrote: "The greatest moments of all / are those
        that makes us feel small". Every company and orchestra I found teaches
        me that lesson again and again. Sorrounding myself with dedicated,
        awe-inspiring people makes me feel small in the best way I can imagine.
      </p>
      <SectionToggle open={true} sectionTitle="Obsidian (2020-2021)">
      </SectionToggle>
      <SectionToggle
        open={false}
        sectionTitle="The Frank-Nilsson Contemporary Jazz Orchestra (2018-2019)"
      >
      </SectionToggle>
      <SectionToggle open={false} sectionTitle="Black Tie Productions (2012-2016)">
      </SectionToggle>
    </BannerShell>
  );
}

export default Leadership;
