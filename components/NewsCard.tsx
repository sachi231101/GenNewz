import { Image, Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';

export const NewsCard = ({ item, onPress }: { item: any; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={{ flexDirection: 'row', backgroundColor: colors.surface, borderRadius: 16, padding: 10, marginBottom: 10 }}>
    <Image source={{ uri: item.thumbnailUrl }} style={{ width: 86, height: 86, borderRadius: 12 }} />
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{item.headline}</Text>
      <Text numberOfLines={2} style={{ color: colors.textSecondary, marginTop: 4 }}>{item.description}</Text>
    </View>
  </Pressable>
);
