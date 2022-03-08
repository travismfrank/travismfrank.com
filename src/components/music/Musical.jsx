import { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';
import { Link, useParams } from 'react-router-dom';

import './Musical.css';
import './Flickity.css';

// Import musical data
const musicalJSON = import.meta.globEager('./../../assets/musicals/*.json');

// Import images
export const musicalBanners = import.meta.globEager('./../../assets/images/musicals/banners/*');
const musicalPosters = import.meta.globEager('./../../assets/images/musicals/posters/*');
const musicalAlbums = import.meta.globEager('./../../assets/images/musicals/albums/*');

import BannerShell from '../shells/BannerShell';
import SectionToggle from '../shells/SectionToggle';
import generateSrcmap from '../../utils/srcmap';
import generateSrcset from '../../utils/srcset';

function Musical() {
  const [album, setAlbum] = useState([]);
  const { musicalName } = useParams();
  const musicalData = musicalJSON['./../../assets/musicals/' + musicalName + '.json'];

  useEffect(() => {
    if (musicalAlbums['./../../assets/images/musicals/albums/' + musicalName + '-1.jpg']) {
      const tempAlbum = [];
      for (let num = 1; num <= 5; num++) {
        tempAlbum.push({
          baseAlbumImageUrl: musicalAlbums['./../../assets/images/musicals/albums/' + musicalName + '-' + num + '.jpg'].default,
          albumImageSrcmap: generateSrcmap(
            musicalAlbums,
            './../../assets/images/musicals/albums/',
            musicalName + '-' + num,
            '.jpg'
          )
        });
      }
      setAlbum(tempAlbum);
    }
  }, [])

  // Banner
  const bannerImageUrl = musicalBanners['./../../assets/images/musicals/banners/' + musicalName + '.jpg'].default;
  const bannerSrcmap = generateSrcmap(
    musicalBanners,
    './../../assets/images/musicals/banners/',
    musicalName,
    '.jpg'
  );

  // Poster
  const posterImageUrl = musicalPosters['./../../assets/images/musicals/posters/' + musicalName + '.jpg'].default;
  const posterSrcmap = generateSrcmap(
    musicalPosters,
    './../../assets/images/musicals/posters/',
    musicalName,
    '.jpg'
  );

  return (
    <BannerShell bannerSrc={bannerImageUrl}
      srcMap={bannerSrcmap}
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
        <p><b>Cast size</b> - {musicalData.cast}</p>
        <p><b>Orchestra size</b> - {musicalData.orchestra}</p>
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
            srcSet={generateSrcset(posterSrcmap)}
            sizes="80vw"
            className="poster"
          />
        </div>
        {album.length > 0 && <Flickity className="carousel" options={{
          imagesLoaded: true,
          wrapAround: true
        }}>
          {album.map(image => {
            return (
              <div className="carousel-image-container">
                <img
                  key={image.baseAlbumImageUrl}
                  src={image.baseAlbumImageUrl}
                  srcSet={generateSrcset(image.albumImageSrcmap)}
                  sizes="80vw"
                />
              </div>
            );
          })}
        </Flickity>}
        {musicalData.moreImagesLink && <p className="more-photos">
          More photos available <a href={musicalData.moreImagesLink} target="_blank">here</a>
        </p>}
      </SectionToggle>
      <SectionToggle open={true} sectionTitle={"Credits"}>
        {musicalData.credits.map(production => {
          return (
            <div className="credits-wrapper">
              <h3>{production.productionTitle}</h3>
              <h4>Creative Team</h4>
              {production.creative.map(role => {
                return (
                  <p><b>{role.title}</b> - {role.name}</p>
                );
              })}
              <h4>Cast</h4>
              {production.cast.map(role => {
                return (
                  <p><b>{role.title}</b> - {role.name}</p>
                );
              })}
              <h4>Orchestra</h4>
              {production.orchestra.map(role => {
                return (
                  <p><b>{role.title}</b> - {role.name}</p>
                );
              })}
              {production.crew.length > 0 && <>
                <h4>Crew</h4>
                {production.crew.map(role => {
                  return (
                    <p><b>{role.title}</b> - {role.name}</p>
                  );
                })}
              </>}
            </div>
          );
        })}
      </SectionToggle>
    </BannerShell>
  );
}

export default Musical;
