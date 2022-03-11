import classNames from 'classnames';
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

function NavigationMenu({ open, setOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState('');

  const navMenuClass = classNames({
    open: open,
  });

  function createSubmenuClickHandler(submenu) {
    return function() {
      if (openSubmenu === submenu) {
        setOpenSubmenu('');
      } else {
        setOpenSubmenu(submenu);
      }
    }
  }

  function linkClickHandler() {
    setOpenSubmenu('');
    setOpen(false);
  }

  return (
    <nav
      aria-label="navigation"
      id="nav-wrapper"
      className={navMenuClass}
    >
      <NavigationItem
        Icon={GiHobbitDoor}
        linkTarget={"/"}
        onClick={linkClickHandler}
        text={"Home"}
      />
      <NavigationItem
        Icon={GiSpaceNeedle}
        onClick={createSubmenuClickHandler('about')}
        text={"About"}
      />
      <CSSTransition
        in={openSubmenu === 'about'}
        timeout={500}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem
            Icon={GiSkills}
            linkTarget={"/about/bio"}
            onClick={linkClickHandler}
            text={"Bio"}
          />
          <NavigationItem
            Icon={GiScales}
            linkTarget={"/about/principles"}
            onClick={linkClickHandler}
            text={"Principles"}
          />
          <NavigationItem
            Icon={GiDirectorChair}
            linkTarget={"/about/leadership"}
            onClick={linkClickHandler}
            text={"Leadership"}
          />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem
        Icon={GiBookshelf}
        onClick={createSubmenuClickHandler('writing')}
        text={"Writing"}
      />
      <CSSTransition
        in={openSubmenu === 'writing'}
        timeout={500}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem
            Icon={GiPencil}
            linkTarget={"/writing/feed"}
            onClick={linkClickHandler}
            text={"Words"}
          />
          <NavigationItem
            Icon={GiTheaterCurtains}
            linkTarget={"/music/records/original-musical-theatre"}
            onClick={linkClickHandler}
            text={"Musicals"}
          />
          <NavigationItem
            Icon={GiSaxophone}
            linkTarget={"/music/records/sketching-the-sky"}
            onClick={linkClickHandler}
            text={"Jazz"}
          />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem
        Icon={GiProcessor}
        linkTarget={"/open-source"}
        onClick={linkClickHandler}
        text={"Open Source"}
      />
      <NavigationItem
        Icon={GiSoundWaves}
        onClick={createSubmenuClickHandler('music')}
        text={"Music"}
      />
      <CSSTransition
        in={openSubmenu === 'music'}
        timeout={750}
        unmountOnExit
      >
        <NavigationSubmenu>
          <NavigationItem
            Icon={GiTheaterCurtains}
            linkTarget={"/music/musicals"}
            onClick={linkClickHandler}
            text={"Musicals"}
          />
          <NavigationItem
            Icon={GiGrandPiano}
            linkTarget={"/music/reels"}
            onClick={linkClickHandler}
            text={"Live Reels"}
          />
          <NavigationItem
            Icon={GiHeadphones}
            linkTarget={"/music/records"}
            onClick={linkClickHandler}
            text={"Records"}
          />
          <NavigationItem
            Icon={GiMusicSpell}
            linkTarget={"/music/theatre-credits"}
            onClick={linkClickHandler}
            text={"Theatre Credits"}
          />
        </NavigationSubmenu>
      </CSSTransition>
      <NavigationItem
        Icon={GiEarthAmerica}
        linkTarget={"/climate"}
        onClick={linkClickHandler}
        text={"Climate"}
      />
      <NavigationItem
        Icon={GiCandlestickPhone}
        linkTarget={"/contact"}
        onClick={linkClickHandler}
        text={"Contact"}
      />
    </nav>
  );
}

export default NavigationMenu;
