import './Principles.css';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

// Import images
const principlesImages = import.meta.globEager('./../../assets/images/about/principles/*');

function Principles() {
  const principlesImageUrl = principlesImages['./../../assets/images/about/principles/principles.jpg'].default;
  const principlesSrcmap = generateSrcmap(
    principlesImages,
    './../../assets/images/about/principles/',
    'principles',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={principlesImageUrl}
      srcMap={principlesSrcmap}
      titleText="Principles"
    >
      <p className="principles-preamble">
        Inspired by Derek Sivers's <a href="https://sive.rs/h"><i>How to Live</i></a> and
        Ray Dalio's <a href="https://www.indiebound.org/book/9781501124020"><i>Principles</i></a>
        , I publicly collect my principles here.
      </p>
      <p><b>Last Updated:</b> September 8, 2022</p>
      <ul className="principles-list">
        <li>Give gratitude</li>
        <li>Embrace change</li>
        <li>Walk uphill</li>
        <li>Take responsibility</li>
        <li>Practice awe</li>
        <li>Shape reality</li>
        <li>Stand out</li>
        <li>Be honest</li>
      </ul>
    </BannerShell>
  );
}

export default Principles;
