import './Records.css';

import ImageLink from '../shells/ImageLink';

import generateSrcmap from '../../utils/srcmap';

// Import images
export const recordImages = import.meta.globEager('./../../assets/images/records/*');

function Records() {
  const records = [
    {
      "title": "Sketching the Sky",
      "id": "sketching-the-sky"
    },
    {
      "title": "Breakout Chronicles",
      "id": "breakout-chronicles"
    },
    {
      "title": "Acoustic",
      "id": "acoustic"
    },
    {
      "title": "Original Musical Theatre",
      "id": "original-musical-theatre"
    }
  ];

  return (
    <div className="records-wrapper">
      <div className="header">
        <h1 className="records-title">Records</h1>
      </div>
      <div className="header spacer" />
      <div className="record-selection-wrapper">
        {records.map(record => {
          const recordImageUrl = recordImages['./../../assets/images/records/' + record.id + '.jpg'].default;
          const recordSrcmap = generateSrcmap(
            recordImages,
            './../../assets/images/records/',
            record.id,
            '.jpg'
          );

          return (
            <ImageLink
              imageSrcmap={recordSrcmap}
              imageUrl={recordImageUrl}
              link={record.id}
              title={record.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Records;
