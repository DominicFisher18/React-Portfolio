import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Body from './components/Nav/Body';

function App() {
  // const [page, setPage] = useState('about');


  return (
    <>
      <Nav />
      <Body />
    </>
  );
}

export default App;
