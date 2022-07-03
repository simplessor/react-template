import { FC } from 'react';
import { useLogger } from './hook/use-logger';

import { FormProvider, useForm } from 'react-hook-form';
import { CurrentTimeView } from './component/current-time-view';

interface LoginForm {
  name: string;
  age: number;
}

export const App: FC = () => {
  useLogger({ name: App.name });

  const context = useForm<LoginForm>();
  const { register, handleSubmit } = context;

  return (
    <div>
      <FormProvider {...context}>
        <input {...register('name')} />
        <input type={'number'} {...register('age')} />
        <button onClick={handleSubmit(console.log)}>Submit</button>
        <CurrentTimeView />
      </FormProvider>
    </div>
  );
};
