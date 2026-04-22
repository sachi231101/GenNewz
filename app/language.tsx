import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { LANGUAGES } from '@/constants/languages';
import { colors } from '@/constants/colors';

export default function Language() {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();
  const toggle = (id: string) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <View style={{ flex: 1, padding: 18, backgroundColor: colors.background }}>
      <Text style={{ color: 'white', fontSize: 28, fontWeight: '800', marginTop: 20 }}>Pick Your Language</Text>
      {LANGUAGES.map((l) => (
        <Pressable key={l.id} onPress={() => toggle(l.id)} style={{ backgroundColor: selected.includes(l.id) ? '#1DB95433' : colors.surface, borderWidth: 1, borderColor: selected.includes(l.id) ? colors.primary : '#222', borderRadius: 16, padding: 16, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{l.flag} {l.label}</Text>
        </Pressable>
      ))}
      <Pressable style={{ marginTop: 'auto', backgroundColor: colors.primary, borderRadius: 12, padding: 15 }} onPress={() => router.replace('/interests')}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Continue</Text></Pressable>
    </View>
  );
}
