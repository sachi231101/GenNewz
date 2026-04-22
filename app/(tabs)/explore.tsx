import { useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { INTERESTS } from '@/constants/interests';
import { CHANNELS } from '@/constants/channels';
import { CategoryCard } from '@/components/CategoryCard';
import { ChannelCard } from '@/components/ChannelCard';

export default function Explore() {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); setTimeout(() => setRefreshing(false), 800); }} />}>
      <Text style={{ color: 'white', fontSize: 26, fontWeight: '800' }}>Trending Topics</Text>
      <Text style={{ color: colors.textSecondary, marginVertical: 8 }}>#IPL2026  #Budget  #AIIndia</Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        {INTERESTS.map((c) => <CategoryCard key={c.name} title={c.name} emoji={c.emoji} />)}
      </View>

      <Text style={{ color: 'white', marginTop: 22, marginBottom: 12, fontSize: 18, fontWeight: '700' }}>Featured Channels</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>{CHANNELS.map((c) => <ChannelCard key={c.id} name={c.name} description={c.description} />)}</ScrollView>
    </ScrollView>
  );
}
