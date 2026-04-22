import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/colors';

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  home: 'home',
  explore: 'compass',
  reels: 'play-circle',
  bookmarks: 'bookmark',
  profile: 'person',
};

export const AppTabs = () => (
  <Tabs
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { backgroundColor: '#101010', borderTopColor: '#1c1c1c' },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      tabBarIcon: ({ color, size }) => <Ionicons name={iconMap[route.name] ?? 'ellipse'} size={size} color={color} />,
    })}
  />
);
