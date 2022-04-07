import { useEffect, useState } from 'react';

const useDebounceValue = <T>(value: T, delayMS: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMS);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof value === 'object' ? JSON.stringify(value) : value, delayMS]);

  return debouncedValue;
};

export default useDebounceValue;
