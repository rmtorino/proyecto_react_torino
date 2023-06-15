import Counter from "./Counter";
import { useState } from "react";
import React from "react";

const CounterContainer = () => {
  //const [nombreVariable, funcionmodifica] = useState(0);

  const [contador, setContador] = useState(0);
  const [count, setCount] = React.useState(1);

  return (
    <Counter
      contador={contador}
      setContador={setContador}
      count={count}
      setCount={setCount}
    />
  );
};

export default CounterContainer;
