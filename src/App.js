import './App.css';
import { useEffect } from 'react';
import { userTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';

function App() {
  const {onToggleButton, tg} = userTelegram();

  useEffect(() => {
    tg.ready();
  }, [])
  
  return (
    <div className="App">
    <Header />
    <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
