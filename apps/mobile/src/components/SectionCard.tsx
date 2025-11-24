import { ReactNode } from 'react';
import { Text, View } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export const SectionCard = ({ title, subtitle, children }: Props) => {
  return (
    <View className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4">
      <Text className="text-[11px] uppercase tracking-[2px] text-gray-400">{title}</Text>
      {subtitle && <Text className="mt-1 text-base font-semibold text-white">{subtitle}</Text>}
      <View className="mt-3">{children}</View>
    </View>
  );
};

