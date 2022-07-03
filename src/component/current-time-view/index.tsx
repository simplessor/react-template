import { FC, memo, useEffect, useState } from 'react';
import { useLogger } from '../../hook/use-logger';

export const CurrentTimeView: FC = memo(function CurrentTimeView() {
  useLogger({ name: CurrentTimeView.name });

  const [text, setText] = useState<string>('init');

  useEffect(() => {
    const timer = setInterval(() => setText(new Date().toLocaleString()), 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{text}</span>;
});
