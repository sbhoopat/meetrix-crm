import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '../src/theme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? 'dark' : 'light'}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}

