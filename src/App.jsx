import React from 'react';
import Header from './components/Header/Header';
import Flower from './components/Flower/flower';


function App() {
  return (
    <div>
      <Header />
      <Flower flowerName='כלנית' petalsColor='pink' />
      <Flower flowerName='חמניה' centerColor='yellow' />
      <Flower flowerName='נרקיס'  />
      <Flower />
    </div>
  );
}

export default App;
