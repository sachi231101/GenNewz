import { Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

export default function Premium() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 18 }}>
      <Text style={{ color: colors.accent, fontSize: 32, fontWeight: '800', marginTop: 40 }}>GenNewz Plus</Text>
      <Text style={{ color: 'white', marginTop: 8 }}>Spotify-style premium for serious news bingers.</Text>

      <View style={{ marginTop: 24, backgroundColor: colors.surface, borderRadius: 16, padding: 16 }}>
        <Text style={{ color: 'white', fontWeight: '700' }}>Free</Text>
        <Text style={{ color: colors.textSecondary, marginTop: 4 }}>Ads, limited reels/day, no offline</Text>
      </View>

      <View style={{ marginTop: 12, backgroundColor: '#2A2100', borderColor: colors.accent, borderWidth: 1, borderRadius: 16, padding: 16 }}>
        <Text style={{ color: colors.accent, fontWeight: '800' }}>Plus ₹99/month • Most Popular</Text>
        <Text style={{ color: '#f2e2a0', marginTop: 4 }}>No ads, unlimited reels, offline, exclusive channels, early access</Text>
      </View>

      <Pressable style={{ marginTop: 20, backgroundColor: colors.accent, borderRadius: 14, padding: 14 }}>
        <Text style={{ textAlign: 'center', fontWeight: '800' }}>Subscribe (Razorpay Placeholder)</Text>
      </Pressable>
    </View>
  );
}
