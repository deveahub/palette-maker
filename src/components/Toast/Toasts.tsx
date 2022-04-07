import Stack from '../Stack';
import Toast from './Toast';
import useToasts from './useToasts';

const Toasts = () => {
  const toasts = useToasts();

  return (
    <Stack
      css={{
        position: 'fixed',
        bottom: 24,
        right: 16,
        flexDirection: 'column-reverse',
        gap: 1,
        width: 300,
      }}
    >
      {toasts.data.map(({ key, text, type }) => (
        <Toast
          key={key}
          onClick={() => toasts.remove(key)}
          type={type}
          text={text}
        />
      ))}
    </Stack>
  );
};

export default Toasts;
