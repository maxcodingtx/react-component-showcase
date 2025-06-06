import React, { useState } from "react";
import Button from "../common/Button.tsx";

const CountButton: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </Button>
  );
};

export default CountButton;
