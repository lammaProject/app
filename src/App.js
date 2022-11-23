import './App.css';
import { useEffect } from 'react';
import { userTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Button from './components/button/Button';

function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
    <Header />
    <Button />
    <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
