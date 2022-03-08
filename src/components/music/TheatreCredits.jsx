import { Link } from 'react-router-dom';

import './TheatreCredits.css';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

// Import images
const theatreCreditsImages = import.meta.globEager('./../../assets/images/about/theatre-credits/*');

function TheatreCredits() {
  const theatreCreditsImageUrl = theatreCreditsImages['./../../assets/images/about/theatre-credits/theatre-credits.jpg'].default;
  const theatreCreditsSrcmap = generateSrcmap(
    theatreCreditsImages,
    './../../assets/images/about/theatre-credits/',
    'theatre-credits',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={theatreCreditsImageUrl}
      srcMap={theatreCreditsSrcmap}
      titleText="Theatre Credits"
    >
    </BannerShell>
  );
}

export default TheatreCredits;
