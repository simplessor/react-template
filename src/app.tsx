import { FC, useState } from 'react';
import { useLogger } from './hook/use-logger';

const latestDateString = () => new Date().toLocaleString();

export const App: FC = () => {
  useLogger({ name: App.name });

  const [text, setText] = useState<string>(latestDateString());

  return (
    <>
      <span>{text}</span>
      <button onClick={() => setText(latestDateString())}>Refresh</button>
    </>
  );
};
