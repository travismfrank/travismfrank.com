import classNames from 'classnames';
import './NavigationButton.css'

function NavigationButton({ mobileNavOpen, setMobileNavOpen }) {
  const navButtonClass = classNames({
    open: mobileNavOpen,
  });

  return (
    <button 
      id="nav-button"
      className={navButtonClass}
      onClick={() => {
        setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
      }}
    >
      <div className="bar-one" />
      <div className="bar-two" />
      <div className="bar-three" />
    </button>
  );
}

export default NavigationButton;
