import './Climate.css';

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
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
      <p className="climate-preamble">
        It's not too late to prevent the worst effects of climate change.
        Private enterprise has a vital role to play in reshaping our economies-
        even more than a responsibility, the energy transition represents an
        opportunity.
      </p>
      <p>

      </p>
      <p>
        This site is hosted with Cloudflare Pages, powered
        by <a
          href="https://blog.cloudflare.com/cloudflare-committed-to-building-a-greener-internet/"
          target="_blank"
        >100% renewable energy</a>.
      </p>
      <SectionToggle open={true} sectionTitle="Education">
        <div className="climate-credit">
          <p>Decarbonization: Polices and Practices for Countries and Companies</p>
          <p className="school">Columbia Climate School - 2022</p>
        </div>
        <div className="climate-credit">
          <p>Harnessing Capital for Climate Solutions</p>
          <p className="school">Columbia Climate School - 2021</p>
        </div>
      </SectionToggle>
    </BannerShell>
  );
}

export default Climate;
