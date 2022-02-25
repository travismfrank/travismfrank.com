import './Leadership.css';
import BannerShell from '../shells/BannerShell';

function Leadership() {
  return (
    <BannerShell
      bannerSrc="../../../src/assets/local/leadership.jpg"
      titleText="Leadership"
    >
      <div className="leadership-content">
      </div>
    </BannerShell>
  );
}

export default Leadership;
