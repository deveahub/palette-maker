import { Moon as MoonIcon, Sun as SunIcon } from 'react-feather';

import useThemeVariant from '@/styles/useThemeVariant';

import IconButton from './IconButton';

const ThemeVariantButton = () => {
  const themeVariant = useThemeVariant();
  return (
    <IconButton
      rounded
      onClick={() =>
        themeVariant.handlers.changeTheme((x) =>
          x === 'dark' ? 'default' : 'dark'
        )
      }
    >
      {themeVariant.themeVariant === 'default' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};

export default ThemeVariantButton;
