import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ReelActions } from './ReelActions';
import { DemoNews } from '@/constants/channels';

export const NewsReel = ({ item }: { item: DemoNews }) => (
  <View style={{ height: '100%', width: '100%', backgroundColor: item.demoColor }}>
    <Pressable style={{ flex: 1 }} onLongPress={() => Haptics.selectionAsync()}>
      <LinearGradient colors={['rgba(0,0,0,0.55)', 'transparent', 'rgba(0,0,0,0.82)']} style={StyleSheet.absoluteFillObject} />
      <View style={{ position: 'absolute', top: 62, left: 16, right: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>{item.channelId}</Text>
        <Text style={{ color: '#1DB954', fontWeight: '700' }}>Follow</Text>
      </View>
      <View style={{ position: 'absolute', bottom: 40, left: 16, right: 16, flexDirection: 'row' }}>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}>{item.headline}</Text>
          <Text style={{ color: 'white', opacity: 0.85, marginTop: 6 }} numberOfLines={2}>{item.description}</Text>
          <Text style={{ color: '#B3B3B3', marginTop: 8 }}>{item.source} • {item.minutesAgo}m ago • Demo</Text>
        </View>
        <ReelActions likes={item.likes ?? 1280} />
      </View>
    </Pressable>
  </View>
);
