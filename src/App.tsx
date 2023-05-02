import { useState, useEffect } from "react";
import "./App.css";
//components
import NormalColorSwap from "components/NormalColorSwap";
import OtherColorSwap from "components/OtherColorSwap";
import StatelessParagraph from 'components/StatelessParagraph';
type colorScheme = 'black' | 'white';

function App() {
  //this count will not go up because onyl children are
  //being rerendered
  useEffect(() => {
    console.count();
    console.log('App rerendered');
  });
  return (
    <div className="App">
      <NormalColorSwap />
      <OtherColorSwap />
      <StatelessParagraph />
    </div>
  );
}

export default App;
