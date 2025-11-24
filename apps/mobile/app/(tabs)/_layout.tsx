import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const screens = [
  { name: 'dashboard', title: 'Dashboard', icon: 'activity' as const },
  { name: 'leads', title: 'Leads', icon: 'users' as const },
  { name: 'automation', title: 'Automation', icon: 'zap' as const },
  { name: 'reports', title: 'Reports', icon: 'bar-chart' as const },
  { name: 'integrations', title: 'Integrations', icon: 'layers' as const }
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2EE4FF',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#05060B',
          borderTopColor: '#0F172A'
        },
        tabBarLabelStyle: { fontSize: 11 }
      }}
    >
      {screens.map(screen => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ color, size }) => <Feather name={screen.icon} color={color} size={size} />
          }}
        />
      ))}
    </Tabs>
  );
}

