import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App(props) {
  const cardList = props.cards.map((card) => (
    <Card
      id={card.id}
      name={card.name}
      key={card.id} />
  ));
  return (
    <div>
      <Header />
      <Navbar />
      {cardList}
    </div>
  );
}

export default App;
