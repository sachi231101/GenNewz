import { View } from 'react-native';
import { colors } from '@/constants/colors';

export const SkeletonLoader = ({ height = 100 }: { height?: number }) => (
  <View style={{ height, backgroundColor: colors.surface, borderRadius: 16, opacity: 0.6 }} />
);
