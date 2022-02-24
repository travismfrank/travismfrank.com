import './BannerShell.css';

function BannerShell({ bannerSrc, children, titleText }) {
  return (
    <div className="banner-shell-wrapper">
      <h1 className="shell-title">{titleText}</h1>
      <img src={bannerSrc} className="banner" />
      {children}
      <div className="banner-shell-footer" />
    </div>
  );
}

export default BannerShell;
