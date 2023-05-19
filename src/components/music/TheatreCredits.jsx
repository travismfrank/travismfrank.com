import './TheatreCredits.css';

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';

import theatreCreditsJSON from '../../assets/theatre-credits.json';

// Import images
const theatreCreditsImages = import.meta.glob('../../assets/images/about/theatre_credits/*', {
  eager: true,
});

function TheatreCredits() {
  const theatreCreditsImageUrl = theatreCreditsImages['../../assets/images/about/theatre_credits/theatre-credits.jpg'].default;
  const theatreCreditsSrcmap = generateSrcmap(
    theatreCreditsImages,
    '../../assets/images/about/theatre_credits/',
    'theatre-credits',
    '.jpg'
  );

  function createTheatreCredit({ producer, role, title, titleExtra }, index, array) {
    return (
      <div className="theatre-credit">
        <p><i>{title}</i>{titleExtra ? ` (${titleExtra})` : ''}</p>
        <p className="producer">{producer}</p>
        <p className="role">{role}</p>
        {index < array.length - 1 && <hr />}
      </div>
    );
  }

  return (
    <BannerShell
      bannerSrc={theatreCreditsImageUrl}
      srcMap={theatreCreditsSrcmap}
      titleText="Theatre Credits"
    >
      <SectionToggle open={true} sectionTitle="Regional Theatre">
        {theatreCreditsJSON.regionalTheatre.map((credit, index, array) => createTheatreCredit(credit, index, array))}
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="Selected Original Musical Theatre">
        {theatreCreditsJSON.selectedOriginalMusicalTheatre.map((credit, index, array) => createTheatreCredit(credit, index, array))}
      </SectionToggle>
      <SectionToggle open={true} sectionTitle="Selected Repertory Theatre">
        {theatreCreditsJSON.selectedRepertoryTheatre.map((credit, index, array) => createTheatreCredit(credit, index, array))}
      </SectionToggle>
    </BannerShell>
  );
}

export default TheatreCredits;
