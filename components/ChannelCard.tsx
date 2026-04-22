import { Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

export const ChannelCard = ({ name, description, onPress }: { name: string; description: string; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={{ width: 180, backgroundColor: colors.surface, borderRadius: 16, padding: 14, marginRight: 12 }}>
    <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: '#222', marginBottom: 10 }} />
    <Text style={{ color: colors.textPrimary, fontSize: 16, fontWeight: '700' }}>{name}</Text>
    <Text numberOfLines={2} style={{ color: colors.textSecondary, marginTop: 4 }}>{description}</Text>
  </Pressable>
);
