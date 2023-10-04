import { useState } from "react";
import Button from "./components/Button";
import { Color } from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <Button size="small" color={Color.GREEN} text="Click me!"></Button>
      <Button size="large" color={Color.RED} text="I'm Red!"></Button>
    </>
  );
}

export default App;
