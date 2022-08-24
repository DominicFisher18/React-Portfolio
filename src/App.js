import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [page, setPage] = useState('about');


  return (
    <>
      <Nav />
    </>
  );
}

export default App;
