import { ReactNode } from 'react';
import { SWRConfig } from 'swr';

const withSWRConfig = (
  fallback: Record<string, unknown>,
  component: ReactNode
) => <SWRConfig value={{ fallback }}>{component}</SWRConfig>;

export default withSWRConfig;
