import './Climate.css';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

// Import images
const climateImages = import.meta.globEager('./../../assets/images/climate/*');

function Climate() {
  const climateImageUrl = climateImages['./../../assets/images/climate/climate.jpg'].default;
  const climateSrcmap = generateSrcmap(
    climateImages,
    './../../assets/images/climate/',
    'climate',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={climateImageUrl}
      srcMap={climateSrcmap}
      titleText="Climate"
    >
    </BannerShell>
  );
}

export default Climate;
