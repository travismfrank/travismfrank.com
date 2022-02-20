import { useState } from 'react';
import './App.css';
import NavigationButton from './navigation/NavigationButton';

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div className="App">
      <NavigationButton />
    </div>
  )
}

export default App;
