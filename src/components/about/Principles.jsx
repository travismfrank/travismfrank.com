import './Principles.css';
import BannerShell from '../shells/BannerShell';

function Principles() {
  return (
    <BannerShell
      bannerSrc="../../../src/assets/local/principles.jpg"
      titleText="Principles"
    >
      <div className="principles-content">
        <p className="preamble">
          Inspired by Derek Sivers's <a href="https://sive.rs/h"><i>How to Live</i></a> and
          Ray Dalio's <a href="https://www.indiebound.org/book/9781501124020"><i>Principles</i></a>
          , I publicly collect my principles here.
        </p>
        <p><b>Last Updated:</b> February 24, 2022</p>
        <ul>
          <li>Give gratitude</li>
          <li>Embrace change</li>
          <li>Walk uphill</li>
          <li>Take responsibility</li>
          <li>Practice awe</li>
          <li>Shape reality</li>
          <li>Stand out</li>
        </ul>
      </div>
    </BannerShell>
  );
}

export default Principles;
