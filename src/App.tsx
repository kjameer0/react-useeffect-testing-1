import { useState, useEffect } from "react";
import "./App.css";
import NormalColorSwap from "components/NormalColorSwap";
import OtherColorSwap from "components/OtherColorSwap";
type colorScheme = 'black' | 'white';

function App() {

  return (
    <div className="App">
      <NormalColorSwap/>
      <OtherColorSwap/>
    </div>
  );
}

export default App;
