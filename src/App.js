import { useState } from 'react';
import './App.scss'
import Header from './components/Header';
import Modal from './components/Modal';
import Project from './components/Project';

function App() {
  const [popup, setPopup] = useState(false);
  const closePopup = () => {
    setPopup(false);
  }
  const openPopup = () => {
    setPopup(true);
  }
  return (
    <div className="App">
      <Header />
      <Project openPopup={openPopup} />
      { popup && <Modal closePopup={closePopup}/> }
    </div>
  );
}

export default App;
