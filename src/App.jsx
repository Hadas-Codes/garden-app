import React from 'react';
import Header from './components/Header/Header';
import Flower from './components/Flower/flower';


function App() {

  const flowersList = [
    { id: 1, name: "כלנית", petals: "red", center: "black" },
    { id: 2, name: "חמניה", petals: "yellow", center: "brown" },
    { id: 3, name: "ורד", petals: "pink", center: "red" }
  ];

  return (
    <div>

      {flowersList.map(flower =>(
      < Flower
        key={flower.id} 
        flowerName={flower.name} 
        petalsColor={flower.petals} 
        centerColor={flower.center} 
        />
    ))};

      <Header />
      <Flower flowerName='כלנית' petalsColor='pink' />
      <Flower flowerName='חמניה' centerColor='yellow' />
      <Flower flowerName='נרקיס'  />
      <Flower />

    </div>
  );
}

export default App;
