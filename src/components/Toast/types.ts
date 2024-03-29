export type ToastType = 'success' | 'error';

export interface ToastData {
  text: string;
  type: ToastType;
  key: string;
}

export type ToastsData = Array<ToastData>;
