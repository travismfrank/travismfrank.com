import { Link } from 'react-router-dom';

import './Bio.css';
import bioImageUrl from '../../assets/images/bio.jpg';
import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';

function Bio() {
  return (
    <BannerShell
      bannerSrc={bioImageUrl}
      titleText="Biography"
    >
      <SectionToggle open={false} sectionTitle="Fast Facts">
        <p><b>Current Residence:</b> New York, NY, USA</p>
        <p><b>Origin:</b> Seattle, WA, USA</p>
        <p><b>Current Gig:</b> Software Engineer, <a href="https://www.placeexchange.com/">Place Exchange</a></p>
        <p><b>Interests:</b> Sushi, Tabletop Games, Neckties, Science Fiction, <i>Magic: The Gathering</i></p>
        <p><b>School:</b> Berklee College of Music, Boston, MA, USA</p>
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="About Me">
        <p>
          Hello! I'm Travis. I build <Link to={"/about/leadership"}>organizations</Link>
          , design <Link to={"/open-source"}>software and systems</Link>, write <Link to={"/music/musicals"}>
          music</Link> and <Link to={"/writing/feed"}>words</Link>, and conduct <Link to={"/music/reels"}>orchestras</Link>.
        </p>
        <p>
          My journey is unusual, but each stop always has something to teach me: how to inspire
          others as a conductor, tell stories as a writer, and manage complexity as an engineer.
        </p>
        <p>
          Right now, I'm empowering artists and venues to cultivate lifelong fans with a fairer, transparent ticketing platform.
        </p>
        <p>
          <Link to={"/contact"}>Get in touch</Link>. I can't wait to hear from you.
        </p>
      </SectionToggle>
    </BannerShell>
  );
}

export default Bio;
