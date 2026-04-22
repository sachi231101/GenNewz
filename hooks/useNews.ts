import { useMemo, useState } from 'react';
import { NEWS } from '@/constants/channels';

export const useNews = () => {
  const [news] = useState(NEWS);
  const trending = useMemo(() => news.slice(0, 6), [news]);

  return {
    news,
    trending,
    loading: false,
    source: 'demo',
  };
};
