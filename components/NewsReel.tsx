import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ReelActions } from './ReelActions';

export const NewsReel = ({ item }: { item: any }) => (
  <View style={{ height: '100%', width: '100%' }}>
    <Pressable style={{ flex: 1 }} onLongPress={() => Haptics.selectionAsync()}>
      <Video source={{ uri: item.videoUrl }} style={{ flex: 1 }} shouldPlay isLooping resizeMode={ResizeMode.COVER} />
      <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.8)']} style={StyleSheet.absoluteFillObject} />
      <View style={{ position: 'absolute', top: 62, left: 16, right: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>{item.channelId}</Text>
        <Text style={{ color: '#1DB954', fontWeight: '700' }}>Follow</Text>
      </View>
      <View style={{ position: 'absolute', bottom: 40, left: 16, right: 16, flexDirection: 'row' }}>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}>{item.headline}</Text>
          <Text style={{ color: 'white', opacity: 0.8, marginTop: 6 }} numberOfLines={2}>{item.description}</Text>
          <Text style={{ color: '#B3B3B3', marginTop: 8 }}>{item.source} • 2h ago</Text>
        </View>
        <ReelActions likes={item.likes ?? 1280} />
      </View>
    </Pressable>
  </View>
);
