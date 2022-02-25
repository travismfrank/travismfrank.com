import './BannerShell.css';

function BannerShell({ bannerSrc, children, titleText }) {
  return (
    <div className="banner-shell-wrapper">
      <div className="banner-shell-content-wrapper">
        <h1 className="shell-title">{titleText}</h1>
        <img src={bannerSrc} className="banner" />
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
