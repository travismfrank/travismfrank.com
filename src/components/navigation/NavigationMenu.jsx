import classNames from 'classNames';
import { useState } from 'react';
import {
  GiBookshelf,
  GiCandlestickPhone,
  GiDirectorChair,
  GiEarthAmerica,
  GiGrandPiano,
  GiHeadphones,
  GiHobbitDoor,
  GiMusicSpell,
  GiPencil,
  GiProcessor,
  GiSaxophone,
  GiScales,
  GiSoundWaves,
  GiSpaceNeedle,
  GiSkills,
  GiTheaterCurtains
} from 'react-icons/gi'
import { CSSTransition } from 'react-transition-group';
import './NavigationMenu.css';
import NavigationSubmenu from './NavigationSubmenu';
import NavigationItem from './NavigationItem';

function NavigationMenu({ open }) {
  const [openSubmenu, setOpenSubmenu] = useState('');

  const navMenuClass = classNames({
    open: open,
  });

  function createClickHandler(submenu) {
    return function() {
      if (openSubmenu === submenu) {
        setOpenSubmenu('');
      } else {
        setOpenSubmenu(submenu);
      }
    }
  }

  return (
    <nav
      aria-label="navigation"
      id="nav-wrapper"
      className={navMenuClass}
    >
      <NavigationItem text={"Home"} Icon={GiHobbitDoor} />
      <NavigationItem
        onClick={createClickHandler('about')}
        text={"About"}
        Icon={GiSpaceNeedle}
      />
      <CSSTransition
        in={openSubmenu === 'about'}
        timeout={750}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem text={"Bio"} Icon={GiSkills} />
          <NavigationItem text={"Principles"} Icon={GiScales} />
          <NavigationItem text={"Leadership"} Icon={GiDirectorChair} />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem
        onClick={createClickHandler('writing')}
        text={"Writing"}
        Icon={GiBookshelf}
      />
      <CSSTransition
        in={openSubmenu === 'writing'}
        timeout={750}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem text={"Words"} Icon={GiPencil} />
          <NavigationItem text={"Musicals"} Icon={GiTheaterCurtains} />
          <NavigationItem text={"Jazz"} Icon={GiSaxophone} />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem text={"Open Source"} Icon={GiProcessor} />
      <NavigationItem
        onClick={createClickHandler('music')}
        text={"Music"}
        Icon={GiSoundWaves}
      />
      <CSSTransition
        in={openSubmenu === 'music'}
        timeout={750}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem text={"Musicals"} Icon={GiTheaterCurtains} />
          <NavigationItem text={"Live Reels"} Icon={GiGrandPiano} />
          <NavigationItem text={"Recordings"} Icon={GiHeadphones} />
          <NavigationItem text={"Theatre Credits"} Icon={GiMusicSpell} />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem text={"Climate"} Icon={GiEarthAmerica} />
      <NavigationItem text={"Contact"} Icon={GiCandlestickPhone} />
    </nav>
  );
}

export default NavigationMenu;
