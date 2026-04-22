import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

export default function Profile() {
  const router = useRouter();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ width: 76, height: 76, borderRadius: 38, backgroundColor: '#2b2b2b', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}>SA</Text></View>
      <Text style={{ color: 'white', fontSize: 26, fontWeight: '800', marginTop: 10 }}>Sachin</Text>
      <Text style={{ color: colors.textSecondary }}>+91 90000 00000</Text>

      <View style={{ marginTop: 18, backgroundColor: colors.surface, borderRadius: 16, padding: 14, flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={{ color: 'white' }}>120 Reels</Text><Text style={{ color: 'white' }}>8 Channels</Text><Text style={{ color: 'white' }}>5 Day Streak</Text>
      </View>

      <Text style={{ color: 'white', marginTop: 16, fontWeight: '700' }}>My Interests</Text>
      <Text style={{ color: colors.textSecondary, marginTop: 6 }}>Sports, Finance, Startups, Bollywood</Text>
      <Text style={{ color: 'white', marginTop: 16, fontWeight: '700' }}>My Languages</Text>
      <Text style={{ color: colors.textSecondary, marginTop: 6 }}>Hindi, English</Text>

      <Pressable onPress={() => router.push('/premium')} style={{ marginTop: 20, backgroundColor: '#2A2100', borderColor: colors.accent, borderWidth: 1, borderRadius: 14, padding: 14 }}>
        <Text style={{ color: colors.accent, fontWeight: '700' }}>Upgrade to GenNewz Plus</Text>
      </Pressable>

      <Pressable style={{ marginTop: 18, backgroundColor: colors.surface, borderRadius: 12, padding: 14 }}><Text style={{ color: '#ff7d7d' }}>Logout</Text></Pressable>
    </ScrollView>
  );
}
