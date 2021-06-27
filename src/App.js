import { useState } from 'react';
import './App.scss'
import Header from './components/Header';
import ModalPledges from './components/ModalPledges';
import ModalThanks from './components/ModalThanks';
import Project from './components/Project';

function App() {
  const [popup, setPopup] = useState(null);
  const closePopup = () => {
    setPopup(null);
  }
  const openPopup = (id) => {
    setPopup(id);
  }

  return (
    <div className={"App" + (popup !== null ? " no-scroll" : "") }>
      <Header />
      <Project openPopup={openPopup} />
      { popup === 'modal' && <ModalPledges openPopup={openPopup} closePopup={closePopup} /> }
      { popup === 'thanks' && <ModalThanks closePopup={closePopup} /> }
    </div>
  );
}

export default App;
