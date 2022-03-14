import './BannerShell.css';
import generateSrcset from '../../utils/srcset.js';

function BannerShell({ bannerSrc, children, srcMap, titleText }) {
  const bannerSrcset = generateSrcset(srcMap);

  return (
    <div className="banner-shell-wrapper">
      <div className="banner-shell-content-wrapper">
        <div className="header">
          <h1 className="shell-title">{titleText}</h1>
        </div>
        <div className="header spacer" />
        <div className="shell-desktop-flex">
          <img
            src={bannerSrc}
            srcSet={bannerSrcset}
            sizes="(min-width: 760px) 50vw, 100vw"
            className="banner"
          />
          <div className="banner-shell-content-flex">
            <div className="banner-shell-content">
              {children}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BannerShell;
