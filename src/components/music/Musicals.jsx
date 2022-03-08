import './Musicals.css';

import ImageLink from '../shells/ImageLink';

import generateSrcmap from '../../utils/srcmap';

// Import images
import { musicalBanners } from './Musical';

function Musicals() {
  const musicals = [
    {
      "title": "Reprise",
      "id": "reprise"
    },
    {
      "title": "Super Iron Cooking Chef",
      "id": "super-iron-cooking-chef"
    },
    {
      "title": "Mirror, Mirror",
      "id": "mirror-mirror"
    },
    {
      "title": "2084",
      "id": "2084"
    },
    {
      "title": "Emerald City",
      "id": "emerald-city"
    },
    {
      "title": "Day One: A Sherlock Story",
      "id": "day-one-a-sherlock-story"
    },
    {
      "title": "Glitter: A Musical Parody",
      "id": "glitter-a-musical-parody"
    }
  ];

  return (
    <div className="musicals-wrapper">
      <div className="header">
        <h1 className="musicals-title">Original Musicals</h1>
      </div>
      <div className="header spacer" />
      <div className="musical-selection-wrapper">
        {musicals.map(show => {
          const bannerImageUrl = musicalBanners['./../../assets/images/musicals/banners/' + show.id + '.jpg'].default;
          const bannerSrcmap = generateSrcmap(
            musicalBanners,
            './../../assets/images/musicals/banners/',
            show.id,
            '.jpg'
          );

          return (
            <ImageLink
              imageSrcmap={bannerSrcmap}
              imageUrl={bannerImageUrl}
              link={show.id}
              title={show.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Musicals;
