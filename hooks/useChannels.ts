import { useMemo } from 'react';
import { CHANNELS } from '@/constants/channels';

export const useChannels = () => {
  const channels = useMemo(() => CHANNELS, []);
  return { channels, loading: false };
};
