import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { INTERESTS } from '@/constants/interests';
import { colors } from '@/constants/colors';

export default function Interests() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));
  const tap = (name: string) => {
    scale.value = withSpring(1.03, {}, () => (scale.value = withSpring(1)));
    setSelected((prev) => (prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]));
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 16 }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '800', marginVertical: 12 }}>What's your vibe?</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {INTERESTS.map((item) => (
          <Animated.View key={item.name} style={[{ width: '48%', marginBottom: 10 }, style]}>
            <Pressable onPress={() => tap(item.name)} style={{ backgroundColor: selected.includes(item.name) ? '#1DB95433' : colors.surface, borderRadius: 14, padding: 14 }}>
              <Text style={{ color: 'white' }}>{item.emoji} {item.name}</Text>
            </Pressable>
          </Animated.View>
        ))}
      </View>
      <Pressable onPress={() => router.replace('/(tabs)/home')} style={{ marginTop: 'auto', borderRadius: 12, padding: 14, backgroundColor: colors.primary }}>
        <Text style={{ textAlign: 'center', fontWeight: '700' }}>Go to Home</Text>
      </Pressable>
    </View>
  );
}
