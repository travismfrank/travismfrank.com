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
        <p><b>Current Residence:</b> New York, NY, USA</p>
        <p><b>Origin:</b> Seattle, WA, USA</p>
        <p><b>Current Gig:</b> Software Engineer, <a href="https://www.placeexchange.com/">Place Exchange</a></p>
        <p><b>Interests:</b> Sushi, Tabletop Games, Neckties, Science Fiction, <i>Magic: The Gathering</i></p>
        <p><b>School:</b> Berklee College of Music, Boston, MA, USA</p>
      </SectionToggle>
    </BannerShell>
  );
}

export default Bio;
