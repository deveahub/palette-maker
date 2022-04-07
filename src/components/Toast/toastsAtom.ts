import { atom } from 'recoil';

import { ToastsData } from './types';

const toastsAtom = atom<ToastsData>({
  key: 'toasts',
  default: [],
});

export default toastsAtom;
