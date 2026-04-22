import { useRouter } from 'expo-router';
import { RefreshControl, ScrollView, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { colors } from '@/constants/colors';
import { useChannels } from '@/hooks/useChannels';
import { useNews } from '@/hooks/useNews';
import { ChannelCard } from '@/components/ChannelCard';
import { NewsCard } from '@/components/NewsCard';

export default function Home() {
  const { channels } = useChannels();
  const { news, trending } = useNews();
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16, paddingBottom: 30 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); setTimeout(() => setRefreshing(false), 800); }} />}>
      <Text style={{ color: 'white', fontSize: 26, fontWeight: '800' }}>Good Morning, Sachin 👋</Text>
      <TextInput placeholder='Search news, channels...' placeholderTextColor='#666' style={{ marginTop: 12, backgroundColor: colors.surface, color: 'white', borderRadius: 12, padding: 12 }} />

      <Text style={{ color: 'white', marginTop: 22, marginBottom: 10, fontSize: 18, fontWeight: '700' }}>Continue Watching</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>{news.map((n) => <View key={n.id} style={{ width: 140, height: 180, borderRadius: 16, backgroundColor: colors.surface, marginRight: 10 }} />)}</ScrollView>

      <Text style={{ color: 'white', marginTop: 22, marginBottom: 10, fontSize: 18, fontWeight: '700' }}>Top Channels</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>{channels.map((c) => <ChannelCard key={c.id} name={c.name} description={c.description} onPress={() => router.push(`/channel/${c.id}`)} />)}</ScrollView>

      <Text style={{ color: 'white', marginTop: 22, marginBottom: 10, fontSize: 18, fontWeight: '700' }}>Trending Now</Text>
      {trending.map((item) => <NewsCard key={item.id} item={item} />)}

      <Text style={{ color: 'white', marginTop: 20, marginBottom: 10, fontSize: 18, fontWeight: '700' }}>Based on Your Interests</Text>
      {news.map((item) => <NewsCard key={`interest-${item.id}`} item={item} />)}
    </ScrollView>
  );
}
