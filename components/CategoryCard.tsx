import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text } from 'react-native';

export const CategoryCard = ({ title, emoji, onPress }: { title: string; emoji: string; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={{ flex: 1, minWidth: '47%', margin: 6 }}>
    <LinearGradient colors={['#1DB954', '#141414']} style={{ borderRadius: 16, padding: 16, minHeight: 110 }}>
      <Text style={{ fontSize: 24 }}>{emoji}</Text>
      <Text style={{ color: 'white', fontWeight: '700', marginTop: 8 }}>{title}</Text>
    </LinearGradient>
  </Pressable>
);
