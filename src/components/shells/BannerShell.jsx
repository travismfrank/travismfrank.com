import './BannerShell.css';
import generateSrcset from '../../utils/srcset.js';

function BannerShell({ bannerSrc, children, titleText }) {
  const bannerSrcset = generateSrcset(bannerSrc);

  return (
    <div className="banner-shell-wrapper">
      <div className="banner-shell-content-wrapper">
        <h1 className="shell-title">{titleText}</h1>
        <img
          src={bannerSrc}
          srcSet={bannerSrcset}
          sizes="100vw"
          className="banner"
        />
        <div className="banner-shell-content">
          {children}
        </div>
      </div>
      <div className="banner-shell-footer spacer" />
      <div className="banner-shell-footer" />
    </div>
  );
}

export default BannerShell;
