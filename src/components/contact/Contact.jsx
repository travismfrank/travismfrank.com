import './Contact.css';

import BannerShell from '../shells/BannerShell';
import generateSrcmap from '../../utils/srcmap';

// Import images
const contactImages = import.meta.globEager('./../../assets/images/contact/*');

function Contact() {
  const contactImageUrl = contactImages['./../../assets/images/contact/contact.jpg'].default;
  const contactSrcmap = generateSrcmap(
    contactImages,
    './../../assets/images/contact/',
    'contact',
    '.jpg'
  );

  return (
    <BannerShell
      bannerSrc={contactImageUrl}
      srcMap={contactSrcmap}
      titleText="Contact"
    >
    </BannerShell>
  );
}

export default Contact;
