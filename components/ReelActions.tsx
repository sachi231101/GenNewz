import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

const Action = ({ icon, count }: { icon: any; count?: number }) => (
  <View style={{ alignItems: 'center', marginBottom: 16 }}>
    <Ionicons name={icon} size={28} color={colors.textPrimary} />
    {typeof count === 'number' && <Text style={{ color: colors.textPrimary, marginTop: 3 }}>{count}</Text>}
  </View>
);

export const ReelActions = ({ likes = 1200 }: { likes?: number }) => (
  <Pressable onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
    <Action icon="heart-outline" count={likes} />
    <Action icon="chatbubble-outline" />
    <Action icon="share-social-outline" />
    <Action icon="bookmark-outline" />
    <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: '#333' }} />
  </Pressable>
);
