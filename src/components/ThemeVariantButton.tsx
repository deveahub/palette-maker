import { Moon as MoonIcon, Sun as SunIcon } from 'react-feather';

import { styled } from '@/styles';
import useThemeVariant from '@/styles/useThemeVariant';

import Button from './Button';
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
      {themeVariant.themeVariant === 'default' ? (
        <MoonIcon color="white" />
      ) : (
        <SunIcon color="white" />
      )}
    </IconButton>
  );
};

export default ThemeVariantButton;