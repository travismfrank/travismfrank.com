import { useState } from 'react';
import './App.css';
import Landing from './landing/Landing';
import NavigationButton from './navigation/NavigationButton';

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div className="App">
      <Landing />
      <NavigationButton />
    </div>
  )
}

export default App;
