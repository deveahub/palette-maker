import { Arrow, Content, Trigger } from '@radix-ui/react-tooltip';

import { styled } from '@/styles';

export {
  Provider as TooltipProvider,
  Root as TooltipRoot,
} from '@radix-ui/react-tooltip';

export const TooltipArrow = styled(Arrow, {});

export const TooltipTrigger = styled(Trigger, {
  border: 'none',
  cursor: 'inherit',
  backgroundColor: 'transparent',
  padding: 0,
});

export const TooltipContent = styled(Content, {
  backgroundColor: '$text',
  color: '$bg',
  p: 0.5,
  borderRadius: '$sm',
  boxShadow: '$sm',
});
