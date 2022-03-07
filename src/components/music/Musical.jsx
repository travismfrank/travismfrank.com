import { Link, useParams } from 'react-router-dom';

import './Musical.css';

// Import musical data
const musicalJSON = import.meta.globEager('./../../assets/musicals/*.json');

// Import images
const musicalBanners = import.meta.globEager('./../../assets/images/musicals/banners/*');
const musicalPosters = import.meta.globEager('./../../assets/images/musicals/posters/*');
const musicalAlbums = import.meta.globEager('./../../assets/images/musicals/albums/*');

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcset from '../../utils/srcset';

function Musical() {
  const { musicalName } = useParams();
  const musicalData = musicalJSON['./../../assets/musicals/' + musicalName + '.json'];

  // Banner
  const bannerImageUrl = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '.jpg'].default;
  const bannerImageUrl480 = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '-480.jpg'].default;
  const bannerImageUrl720 = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '-720.jpg'].default;
  const bannerImageUrl1080 = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '-1080.jpg'].default;
  const bannerImageUrl3840 = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '-3840.jpg'].default;

  // Poster
  const posterImageUrl = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '.jpg'].default;
  const posterImageUrl480 = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '-480.jpg'].default;
  const posterImageUrl720 = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '-720.jpg'].default;
  const posterImageUrl1080 = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '-1080.jpg'].default;
  const posterImageUrl3840 = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '-3840.jpg'].default;

  return (
    <BannerShell bannerSrc={bannerImageUrl}
      srcMap={{
        480: bannerImageUrl480,
        720: bannerImageUrl720,
        1080: bannerImageUrl1080,
        3840: bannerImageUrl3840
      }}
      titleText={musicalData.shortTitle}
    >
      <div className="writing-credits">
        <p><b>Book</b> - {musicalData.book}</p>
        <p><b>Music</b> - {musicalData.music}</p>
        <p><b>Lyrics</b> - {musicalData.lyrics}</p>
      </div>
      <SectionToggle open={false} sectionTitle={"Fast Facts"}>
        <p><b>Premiere</b> - {musicalData.premiereDate}</p>
        {musicalData.btp && <p>Originally produced by <Link to={"/about/leadership"}>Black Tie Productions</Link></p>}
        <p><b>Productions to date</b> - {musicalData.productions}</p>
        <p><b>Cast Size</b> - {musicalData.cast}</p>
        <p><b>Orchestra Size</b> - {musicalData.orchestra}</p>
      </SectionToggle>
      <SectionToggle open={true} sectionTitle={"Description"}>
        <p>{musicalData.description}</p>
      </SectionToggle>
      {musicalData.reviews.length > 0 && <SectionToggle open={true} sectionTitle={"Reviews"}>
        {musicalData.reviews.map(review => {
          return (
            <>
              <p>"{review.content}"</p>
              <p className="review-credit"><i>- {review.credit}</i></p>
            </>
          )
        })}
      </SectionToggle>}
      <SectionToggle open={true} sectionTitle={"Media"}>
        <div className="poster-container">
          <img
            src={posterImageUrl}
            srcSet={generateSrcset({
              480: posterImageUrl480,
              720: posterImageUrl720,
              1080: posterImageUrl1080,
              3840: posterImageUrl3840
            })}
            sizes="80vw"
            className="poster"
          />
        </div>
      </SectionToggle>
      <SectionToggle open={false} sectionTitle={"Credits"}>
        {/* Read from JSON */}
      </SectionToggle>
    </BannerShell>
  );
}

export default Musical;
