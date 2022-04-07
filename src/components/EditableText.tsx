import { ChangeEvent, FC, useEffect, useState } from 'react';

import { ComponentProps, styled } from '@/styles';

import Input from './Input';

const TextInput = styled(Input, {
  background: 'transparent',
  border: 'none',
  height: 'fit-content',
  fontSize: '$md',
  fontWeight: 'bold',
  borderRadius: '$sm',
  outline: 'none !important',
});

interface EditableTextProps extends ComponentProps<typeof TextInput> {
  text: string;
  onFinishEdit: (value: string, resetValue: () => void) => boolean;
}

const EditableText: FC<EditableTextProps> = ({
  text,
  onFinishEdit,
  ...props
}) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    if (text && value !== text) {
      setValue(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const resetValue = () => {
    setValue(text);
  };

  const onProperFinishEdit = async () => {
    if (!value || value === text) {
      setValue(text);
      return;
    }
    const result = await onFinishEdit(value, resetValue);

    if (!result) {
      setValue(text);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <TextInput
      {...props}
      value={value}
      onChange={onInputChange}
      onBlur={onProperFinishEdit}
    />
  );
};

export default EditableText;
