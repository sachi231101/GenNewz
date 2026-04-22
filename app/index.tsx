import { useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';

export default function Splash() {
  const router = useRouter();
  const scale = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.1, duration: 700, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 700, useNativeDriver: true }),
      ]),
    ).start();

    const t = setTimeout(() => router.replace('/onboarding'), 2000);
    return () => clearTimeout(t);
  }, [router, scale]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text style={{ color: 'white', fontSize: 44, fontWeight: '800', transform: [{ scale }] }}>GenNewz</Animated.Text>
      <Text style={{ color: colors.textSecondary, marginTop: 10 }}>News that feels like entertainment</Text>
    </View>
  );
}
