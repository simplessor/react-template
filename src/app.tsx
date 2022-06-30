import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";

export const App: FC = () => {
  const [text, setText] = useState<string>('init');

  useEffect(() => {
    const timer = setInterval(() => {
      setText(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {text}
    </span>
  );
};