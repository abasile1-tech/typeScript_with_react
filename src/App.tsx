import { useState } from "react";
import Button from "./components/Button";
import { Color } from "./components/Button";

function App() {
  return (
    <>
      <Button size="small" color={Color.GREEN} text="Click me!"></Button>
    </>
  );
}

export default App;
