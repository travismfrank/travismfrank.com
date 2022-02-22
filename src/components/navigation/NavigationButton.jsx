import classNames from 'classNames';
import './NavigationButton.css'

function NavigationButton(props) {
  const { mobileNavOpen, setMobileNavOpen } = props;

  const navClass = classNames({
    open: mobileNavOpen,
  });

  return (
    <button 
      id="nav-button"
      className={navClass}
      onClick={() => {
        setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
      }}
    >
      <div className="bar-one" />
      <div className="bar-two" />
      <div className="bar-three" />
    </button>
  )
}

export default NavigationButton;
