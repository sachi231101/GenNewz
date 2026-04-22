import * as Haptics from 'expo-haptics';
import { FlatList, ViewToken } from 'react-native';
import { useRef, useState } from 'react';
import { NewsReel } from '@/components/NewsReel';
import { useNews } from '@/hooks/useNews';

export default function Reels() {
  const { news } = useNews();
  const [active, setActive] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0]?.index != null && viewableItems[0].index !== active) {
      setActive(viewableItems[0].index);
      Haptics.selectionAsync();
    }
  }).current;

  return (
    <FlatList
      data={news}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => <NewsReel item={item} />}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
    />
  );
}
