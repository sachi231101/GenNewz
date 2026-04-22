import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { CHANNELS, NEWS } from '@/constants/channels';

export default function Bookmarks() {
  const [tab, setTab] = useState<'reels' | 'channels'>('reels');
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 26, fontWeight: '800' }}>Bookmarks</Text>
      <View style={{ flexDirection: 'row', marginVertical: 14 }}>
        <Pressable onPress={() => setTab('reels')} style={{ marginRight: 8, backgroundColor: tab === 'reels' ? colors.primary : colors.surface, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 }}><Text>Saved Reels</Text></Pressable>
        <Pressable onPress={() => setTab('channels')} style={{ backgroundColor: tab === 'channels' ? colors.primary : colors.surface, borderRadius: 999, paddingVertical: 8, paddingHorizontal: 14 }}><Text>Followed Channels</Text></Pressable>
      </View>

      {tab === 'reels' ? (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {NEWS.map((n) => <View key={n.id} style={{ width: '48%', height: 180, backgroundColor: colors.surface, borderRadius: 16, marginBottom: 10 }} />)}
        </View>
      ) : (
        CHANNELS.map((c) => (
          <View key={c.id} style={{ backgroundColor: colors.surface, borderRadius: 16, padding: 14, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white', flex: 1 }}>{c.name}</Text>
            <Text style={{ color: '#ff7d7d' }}>Unfollow</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
