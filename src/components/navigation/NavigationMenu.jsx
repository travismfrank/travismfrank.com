import classNames from 'classNames';
import {
  GiCandlestickPhone,
  GiCableStayedBridge,
  GiSpaceNeedle,
  GiEarthAmerica,
  GiBookshelf,
  GiHobbitDoor,
  GiSoundWaves
} from 'react-icons/gi'
import './NavigationMenu.css';

function NavigationMenu({ open }) {
  const navMenuClass = classNames({
    open: open,
  });

  return (
    <nav 
      aria-label="navigation"
      id="nav-wrapper"
      className={navMenuClass}
    >
      <div className="nav-link">
        Home
        <GiHobbitDoor className="nav-icon" />
      </div>
      <div className="nav-link">
        About
        <GiSpaceNeedle className="nav-icon" />
      </div>
      <div className="nav-link">
        Writing
        <GiBookshelf className="nav-icon" />
      </div>
      <div className="nav-link">
        Open Source
        <GiCableStayedBridge className="nav-icon" />
      </div>
      <div className="nav-link">
        Music
        <GiSoundWaves className="nav-icon" />
      </div>
      <div className="nav-link">
        Climate
        <GiEarthAmerica className="nav-icon" />
      </div>
      <div className="nav-link">
        Contact
        <GiCandlestickPhone className="nav-icon" />
      </div>
    </nav>
  );
}

export default NavigationMenu;
