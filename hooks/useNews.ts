import * as FileSystem from 'expo-file-system';
import { useEffect, useMemo, useState } from 'react';
import { NEWS } from '@/constants/channels';

const CACHE = `${FileSystem.cacheDirectory}gennewz-reels.json`;

export const useNews = () => {
  const [news, setNews] = useState(NEWS);

  useEffect(() => {
    (async () => {
      const exists = await FileSystem.getInfoAsync(CACHE);
      if (exists.exists) {
        const cached = await FileSystem.readAsStringAsync(CACHE);
        setNews(JSON.parse(cached));
      }
      await FileSystem.writeAsStringAsync(CACHE, JSON.stringify(NEWS.slice(0, 10)));
    })();
  }, []);

  const trending = useMemo(() => news.slice(0, 6), [news]);
  return { news, trending, loading: false };
};
