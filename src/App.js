import React from 'react';
// import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App(props) {

  // const [buttonClicked, setbuttonClicked] = useState(false);


  const cardList = props.cards.map((card) => (
    <Card
      id={card.id}
      name={card.name}
      key={card.id}
      content={card.content} 
      />
  ));
  return (
    <div>
      <Header />
      <Navbar />
      {cardList}
      <Footer />
    </div>
  );
}

export default App;
