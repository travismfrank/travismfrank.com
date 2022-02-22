import { useState } from 'react';
import './App.css';
import Landing from './landing/Landing';
import NavigationButton from './navigation/NavigationButton';

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <Landing />
      <NavigationButton 
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
    </div>
  )
}

export default App;
