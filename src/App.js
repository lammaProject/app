import './App.css';
import { useEffect } from 'react';
import { userTelegram } from './hooks/useTelegram.js';

function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
    <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
