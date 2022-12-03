import { Link } from 'react-router-dom';

import './Bio.css';

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';

// Import images
const bioImages = import.meta.globEager('./../../assets/images/about/bio/*');

function Bio() {
  const bioImageUrl = bioImages['./../../assets/images/about/bio/bio.jpg'].default;
  const bioSrcmap = generateSrcmap(
    bioImages,
    './../../assets/images/about/bio/',
    'bio',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={bioImageUrl}
      srcMap={bioSrcmap}
      titleText="Biography"
    >
      <SectionToggle open={false} sectionTitle="Fast Facts">
        <p><b>Current Residence:</b> Den Haag, NL</p>
        <p><b>Origin:</b> Seattle, WA, USA</p>
        <p><b>Current Gig:</b> Founder, Frank Industries</p>
        <p><b>Interests:</b> Sushi, Tabletop Games, Neckties, Science Fiction, <i>Magic: The Gathering</i></p>
        <p><b>School:</b> Berklee College of Music, Boston, MA, USA</p>
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="About Me">
        <p>
          Hello! I'm Travis. I found <Link to={"/about/leadership"}>organizations</Link>
          , design <Link to={"/open-source"}>software and systems</Link>, write <Link to={"/music/musicals"}>
          music</Link> and <Link to={"/writing/feed"}>words</Link>, and conduct <Link to={"/music/reels/conducting"}>orchestras</Link>.
        </p>
        <p>
          My journey is unusual, but each stop always has something to teach me: how to inspire
          others as a conductor, tell stories as a writer, and manage complexity as an engineer.
        </p>
        <p>
          Right now, I'm exploring opportunities to help stage managers save time with software. If you're
          a stage manager, <Link to={"/contact"}>reach out</Link>! As the backbone of every production, you deserve
          less paperwork and more time to do what you love. Let's work together to make your life easier.
        </p>
        <p>
          Feel free to <Link to={"/contact"}>get in touch</Link>. I can't wait to hear from you.
        </p>
      </SectionToggle>
    </BannerShell>
  );
}

export default Bio;
