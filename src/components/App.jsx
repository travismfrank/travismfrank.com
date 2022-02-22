import { useState } from 'react';
import './App.css';
import Landing from './landing/Landing';
import NavigationButton from './navigation/NavigationButton';
import NavigationMenu from './navigation/NavigationMenu';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <Landing />
      <NavigationButton 
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <NavigationMenu open={mobileNavOpen} />
    </div>
  );
}

export default App;
