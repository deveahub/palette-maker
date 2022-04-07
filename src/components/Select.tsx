import { ComponentProps, styled } from '@/styles';

const StyledSelect = styled('select', {
  borderRadius: '$md',
  height: 44,
  px: 1,
  border: 'none',
  boxShadow: '$sm',
  color: '$text',
  backgroundColor: '$bg-alpha-1',
});
interface SelectProps<Options extends Record<string, string>> {
  options: Options;
  value: keyof Options | string | null | undefined;
}

const Select = <Options extends Record<string, string>>({
  options,
  value,
  ...rest
}: SelectProps<Options> & ComponentProps<typeof StyledSelect>) => (
  <StyledSelect value={value as string} {...rest}>
    {Object.keys(options).map((currV: string) => {
      const label = options[currV];
      return (
        <option value={currV} key={currV}>
          {label}
        </option>
      );
    })}
  </StyledSelect>
);

export default Select;
