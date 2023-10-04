import { useState } from "react";
import Button from "./components/Button";
import { Color } from "./components/Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const increment = (amount: number) => {
    setCounter(counter + amount);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1 onClick={() => increment(2)}>{counter}</h1>

      <Button size="small" color={Color.GREEN} text="Click me!"></Button>
      <Button
        size="large"
        color={Color.RED}
        text="I'm Red!"
        borderColor={Color.BLUE}
      ></Button>
    </>
  );
}

export default App;
