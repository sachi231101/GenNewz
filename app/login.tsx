import { useRouter } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { colors } from '@/constants/colors';

export default function Login() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20, justifyContent: 'center' }}>
      <Text style={{ color: 'white', fontSize: 38, fontWeight: '800' }}>GenNewz</Text>
      <TextInput placeholder="Phone Number" placeholderTextColor="#777" style={{ marginTop: 24, backgroundColor: colors.surface, color: 'white', borderRadius: 12, padding: 14 }} />
      <Pressable style={{ marginTop: 12, backgroundColor: colors.primary, borderRadius: 12, padding: 14 }} onPress={() => router.replace('/language')}>
        <Text style={{ textAlign: 'center', fontWeight: '700' }}>Continue with OTP</Text>
      </Pressable>
      <Pressable style={{ marginTop: 10, borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#303030' }} onPress={() => router.replace('/language')}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Sign in with Google</Text>
      </Pressable>
    </View>
  );
}
