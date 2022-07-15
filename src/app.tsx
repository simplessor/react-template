import { FC, useState } from 'react';
import { useLogger } from './hook/use-logger';
import { useUserInfo } from './hook/use-user-info';

export const App: FC = () => {
  useLogger({ name: App.name });
  const user1 = useUserInfo('simplessor', 'test');
  const user2 = useUserInfo('xy', 'test');
  const user3 = useUserInfo('sqwe', 'test');

  const [n, setN] = useState<number>(0);

  return (
    <>
      <p>{user1}</p>
      <p>{user2}</p>
      <p>{user3}</p>
      <button onClick={() => setN((p) => p + 1)}>{n}</button>
    </>
  );
};
