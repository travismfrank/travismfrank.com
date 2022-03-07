import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Landing from './landing/Landing';

import Bio from './about/Bio';
import Leadership from './about/Leadership';
import Principles from './about/Principles';

import Feed from './writing/Feed';
import Post from './writing/Post';

import OpenSource from './open_source/OpenSource';

import Musical from './music/Musical';
import Musicals from './music/Musicals';
import Record from './music/Record';
import Records from './music/Records';
import Reel from './music/Reel';
import Reels from './music/Reels';
import TheatreCredits from './music/TheatreCredits';

import Climate from './climate/Climate';

import Contact from './contact/Contact';

import PageNotFound from './errors/PageNotFound';

import NavigationButton from './navigation/NavigationButton';
import NavigationMenu from './navigation/NavigationMenu';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <NavigationButton 
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <NavigationMenu open={mobileNavOpen} setOpen={setMobileNavOpen} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about">
          <Route path="bio" element={<Bio />} />
          <Route path="principles" element={<Principles />} />
          <Route path="leadership" element={<Leadership />} />
        </Route>
        <Route path="writing">
          <Route path="feed" element={<Feed />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="open-source" element={<OpenSource />} />
        <Route path="music">
          <Route path="musicals">
            <Route index element={<Musicals />} />
            <Route path=":musicalName" element={<Musical />} />
          </Route>
          <Route path="reels">
            <Route index element={<Reels />} />
            <Route path=":reelName" element={<Reel />} />
          </Route>
          <Route path="records">
            <Route index element={<Records />} />
            <Route path=":recordName" element={<Record />} />
          </Route>
          <Route path="theatre-credits" element={<TheatreCredits />} />
        </Route>
        <Route path="climate" element={<Climate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
