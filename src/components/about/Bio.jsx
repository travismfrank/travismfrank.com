import './Bio.css';
import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';

function Bio() {
  return (
    <BannerShell
      bannerSrc="../../../src/assets/local/bio.jpg"
      titleText="Biography"
    >
      <SectionToggle open={false} sectionTitle="Fast Facts">
        <p>Hello</p>
      </SectionToggle>
    </BannerShell>
  );
}

export default Bio;
