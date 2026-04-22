import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

const slides = [
  { title: 'Your Daily News, In 60 Seconds', icon: 'play-circle' },
  { title: 'Follow Topics You Love', icon: 'heart' },
  { title: 'In Your Language, Your Way', icon: 'globe' },
] as const;

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const item = slides[index];
  const done = index === slides.length - 1;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center' }}>
      <Ionicons name={item.icon} size={72} color={colors.primary} style={{ alignSelf: 'center' }} />
      <Text style={{ color: 'white', fontSize: 30, fontWeight: '800', textAlign: 'center', marginTop: 20 }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 24 }}>
        {slides.map((_, i) => <View key={i} style={{ width: 8, height: 8, borderRadius: 4, marginHorizontal: 4, backgroundColor: i === index ? colors.primary : '#444' }} />)}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 34 }}>
        <Pressable onPress={() => router.replace('/login')}><Text style={{ color: colors.textSecondary }}>Skip</Text></Pressable>
        <Pressable onPress={() => done ? router.replace('/login') : setIndex(index + 1)}><Text style={{ color: colors.primary, fontWeight: '700' }}>{done ? 'Get Started' : 'Next'}</Text></Pressable>
      </View>
    </View>
  );
}
