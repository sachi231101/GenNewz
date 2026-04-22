import { Pressable, Text, View } from 'react-native';
import { colors } from '@/constants/colors';
import { DemoNews } from '@/constants/channels';

export const NewsCard = ({ item, onPress }: { item: DemoNews; onPress?: () => void }) => (
  <Pressable onPress={onPress} style={{ flexDirection: 'row', backgroundColor: colors.surface, borderRadius: 16, padding: 10, marginBottom: 10 }}>
    <View style={{ width: 86, height: 86, borderRadius: 12, backgroundColor: item.demoColor, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 26 }}>📰</Text>
    </View>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={{ color: colors.textPrimary, fontWeight: '700' }}>{item.headline}</Text>
      <Text numberOfLines={2} style={{ color: colors.textSecondary, marginTop: 4 }}>{item.description}</Text>
      <Text style={{ color: colors.textSecondary, marginTop: 6, fontSize: 12 }}>{item.source} • {item.minutesAgo}m ago • Demo</Text>
    </View>
  </Pressable>
);
