import classNames from 'classNames';
import { useState } from 'react';
import {
  GiBookshelf,
  GiCandlestickPhone,
  GiCheckboxTree,
  GiDirectorChair,
  GiEarthAmerica,
  GiGrandPiano,
  GiHeadphones,
  GiHobbitDoor,
  GiPencil,
  GiProcessor,
  GiSaxophone,
  GiScales,
  GiSoundWaves,
  GiSpaceNeedle,
  GiSkills,
  GiTheaterCurtains
} from 'react-icons/gi'
import './NavigationMenu.css';
import NavigationSubmenu from './NavigationSubmenu';
import NavigationItem from './NavigationItem';

function NavigationMenu({ open }) {
  const [openSubmenu, setOpenSubmenu] = useState('about');

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
      {
        openSubmenu === 'about' &&
        <NavigationSubmenu>
          <NavigationItem text={"Bio"} Icon={GiSkills} />
          <NavigationItem text={"Principles"} Icon={GiScales} />
          <NavigationItem text={"Leadership"} Icon={GiDirectorChair} />
        </NavigationSubmenu>
      }
      <NavigationItem
        onClick={createClickHandler('writing')}
        text={"Writing"}
        Icon={GiBookshelf}
      />
      {
        openSubmenu === 'writing' &&
        <NavigationSubmenu>
          <NavigationItem text={"Words"} Icon={GiPencil} />
          <NavigationItem text={"Musicals"} Icon={GiTheaterCurtains} />
          <NavigationItem text={"Jazz"} Icon={GiSaxophone} />
        </NavigationSubmenu>
      }
      <NavigationItem text={"Open Source"} Icon={GiProcessor} />
      <NavigationItem
        onClick={createClickHandler('music')}
        text={"Music"}
        Icon={GiSoundWaves}
      />
      {
        openSubmenu === 'music' &&
        <NavigationSubmenu>
          <NavigationItem text={"Musicals"} Icon={GiTheaterCurtains} />
          <NavigationItem text={"Live Reels"} Icon={GiGrandPiano} />
          <NavigationItem text={"Recordings"} Icon={GiHeadphones} />
          <NavigationItem text={"Theatre Credits"} Icon={GiCheckboxTree} />
        </NavigationSubmenu>
      }
      <NavigationItem text={"Climate"} Icon={GiEarthAmerica} />
      <NavigationItem text={"Contact"} Icon={GiCandlestickPhone} />
    </nav>
  );
}

export default NavigationMenu;
