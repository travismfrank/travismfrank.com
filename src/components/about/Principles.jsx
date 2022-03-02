import './Principles.css';
import principlesImageUrl from '../../assets/images/principles.jpg';
import principlesImageUrl480 from '../../assets/images/principles-480.jpg';
import principlesImageUrl720 from '../../assets/images/principles-720.jpg';
import principlesImageUrl1080 from '../../assets/images/principles-1080.jpg';
import principlesImageUrl3840 from '../../assets/images/principles-3840.jpg';
import BannerShell from '../shells/BannerShell';

function Principles() {
  return (
    <BannerShell
      bannerSrc={principlesImageUrl}
      srcMap={{
        480: principlesImageUrl480,
        720: principlesImageUrl720,
        1080: principlesImageUrl1080,
        3840: principlesImageUrl3840
      }}
      titleText="Principles"
    >
      <p className="principles-preamble">
        Inspired by Derek Sivers's <a href="https://sive.rs/h"><i>How to Live</i></a> and
        Ray Dalio's <a href="https://www.indiebound.org/book/9781501124020"><i>Principles</i></a>
        , I publicly collect my principles here.
      </p>
      <p><b>Last Updated:</b> February 24, 2022</p>
      <ul className="principles-list">
        <li>Give gratitude</li>
        <li>Embrace change</li>
        <li>Walk uphill</li>
        <li>Take responsibility</li>
        <li>Practice awe</li>
        <li>Shape reality</li>
        <li>Stand out</li>
      </ul>
    </BannerShell>
  );
}

export default Principles;
