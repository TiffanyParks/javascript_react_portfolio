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
      {/* <button onClick={(e) => setisLoggedIn(e.target.value)} /> */}
      {cardList}
      <Footer />
    </div>
  );
  
    // function MyButton(){
  //   function handleClick(){
  //     let contentBtn;
  //     if (isLoggedIn) {
  //       contentBtn =< Contact/>;
  //     } else {
  //       content = < About/>;
  //     }
  //   return (
  //    <div>
  //     {content}
  //    </div>
  //   );

  //<div> {isLoggedIn || <About /> || <Contact /> || <Work />} </div>

  // function MyButton() {
    // const [isLoggedIn, setisLoggedIn] = useState(false);
  
  //   function handleClick() {
  //     setisLoggedIn( isLoggedIn );
  //   }
  //   return {
  //     <button onClick={handleClick}>
  //     {isLoggedIn}
  //     </button>
  //     );
  //   }
  }




export default App;
