import { ReactNode } from 'react';
import { Pressable, Text } from 'react-native';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onPress?: () => void;
};

export const NeonButton = ({ children, variant = 'primary', onPress }: Props) => {
  const textClass = variant === 'primary' ? 'text-[#2EE4FF]' : 'text-white';
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        'rounded-full px-4 py-2 text-xs font-semibold',
        variant === 'primary' ? 'bg-[#2EE4FF]/15 border border-[#2EE4FF]/40' : 'border border-white/30'
      )}
    >
      <Text className={`${textClass} text-[12px] font-semibold uppercase tracking-[1px]`}>{children}</Text>
    </Pressable>
  );
};

