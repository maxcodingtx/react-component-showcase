import { useEffect, useState } from "react";

export default function Timer() {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setSecondsPassed((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(intervalTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">useEffect Timer</h1>
      <p className="text-xl">Seconds passed: {secondsPassed}</p>
    </div>
  );
}
