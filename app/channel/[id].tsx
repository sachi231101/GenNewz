import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { CHANNELS, NEWS } from '@/constants/channels';
import { colors } from '@/constants/colors';
import { NewsCard } from '@/components/NewsCard';
import { ChannelCard } from '@/components/ChannelCard';

export default function ChannelScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const channel = CHANNELS.find((c) => c.id === id) ?? CHANNELS[0];
  const reels = NEWS.filter((n) => n.channelId === channel.id);
  const similar = CHANNELS.filter((c) => c.id !== channel.id).slice(0, 4);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ paddingBottom: 24 }}>
      <View style={{ height: 220, backgroundColor: '#262626' }} />
      <View style={{ padding: 16 }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: '800' }}>{channel.name}</Text>
        <Text style={{ color: colors.textSecondary, marginTop: 6 }}>{channel.description}</Text>
        <Text style={{ color: colors.textSecondary, marginTop: 4 }}>154K followers • {reels.length} reels</Text>
        <View style={{ marginTop: 12, backgroundColor: colors.primary, borderRadius: 999, padding: 10, width: 110 }}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Play All</Text></View>

        <Text style={{ color: 'white', marginTop: 20, marginBottom: 10, fontWeight: '700' }}>Channel Reels</Text>
        {reels.map((r) => <NewsCard key={r.id} item={r} />)}

        <Text style={{ color: 'white', marginTop: 20, marginBottom: 10, fontWeight: '700' }}>Similar Channels</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>{similar.map((s) => <ChannelCard key={s.id} name={s.name} description={s.description} />)}</ScrollView>
      </View>
    </ScrollView>
  );
}
