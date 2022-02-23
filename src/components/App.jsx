import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bio from './about/Bio';
import Leadership from './about/Leadership';
import Principles from './about/Principles';
import Landing from './landing/Landing';
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
