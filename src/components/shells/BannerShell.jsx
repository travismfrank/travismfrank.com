import './BannerShell.css';
import generateSrcset from '../../utils/srcset.js';

function BannerShell({ bannerSrc, children, srcMap, titleText }) {
  const bannerSrcset = generateSrcset(srcMap);

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
      <div className="footer spacer" />
      <div className="footer" />
    </div>
  );
}

export default BannerShell;
