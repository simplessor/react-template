export interface UseLoggerOptions {
  name?: string;
  logOnRender?: boolean;
}

export const useLogger = (options: UseLoggerOptions = {}) => {
  const { name, logOnRender = true } = options;

  if (logOnRender) {
    console.log(`[${name}]: rendered`);
  }
};
