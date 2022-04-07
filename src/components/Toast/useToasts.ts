import { nanoid } from 'nanoid';
import { useRecoilState } from 'recoil';

import toastsAtom from './toastsAtom';
import { ToastData } from './types';

const useToasts = () => {
  const [toasts, setToasts] = useRecoilState(toastsAtom);

  const add = (toastData: Omit<ToastData, 'key'>) => {
    setToasts((currToasts) => [{ ...toastData, key: nanoid() }, ...currToasts]);
  };

  const remove = (key: string) =>
    setToasts((currToasts) => currToasts.filter((t) => t.key !== key));

  return {
    data: toasts,
    add,
    remove,
  };
};

export default useToasts;
