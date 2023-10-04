import { useState } from "react";
import Button from "./components/Button";
import { Color } from "./components/Button";
import { UserType } from "../src/types";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const [user, setUser] = useState<UserType | null>(null);

  const increment = (e: React.MouseEvent<HTMLElement>) => {
    setCounter(counter + 1);
  };

  const decrement = (e: React.MouseEvent<HTMLElement>) => {
    setCounter(counter - 1);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (!user) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h1 onClick={increment}>{counter}</h1>

      <Button
        size="small"
        color={Color.GREEN}
        text="Decrement"
        onClick={decrement}
      ></Button>
      <Button
        size="large"
        color={Color.RED}
        text="Increment"
        borderColor={Color.BLUE}
        onClick={increment}
      ></Button>
    </>
  );
}

export default App;
