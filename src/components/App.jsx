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
import Record from './music/Record';
import Reel from './music/Reel';
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about">
          <Route path="bio" element={<Bio />} />
          <Route path="principles" element={<Leadership />} />
          <Route path="leadership" element={<Principles />} />
        </Route>
        <Route path="/writing">
          <Route path="feed" element={<Feed />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/music">
          <Route path="musical">
            <Route path=":musicalName" element={<Musical />} />
          </Route>
          <Route path="reel">
            <Route path=":reelName" element={<Reel />} />
          </Route>
          <Route path="record">
            <Route path=":recordName" element={<Record />} />
          </Route>
          <Route path="theatre-credits" element={<TheatreCredits />} />
        </Route>
        <Route path="/climate" element={<Climate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <NavigationButton 
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <NavigationMenu open={mobileNavOpen} />
    </div>
  );
}

export default App;
