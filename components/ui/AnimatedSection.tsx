import React from 'react';
import { Animated } from 'react-native';
import useFadeIn from '@/hooks/useFadeIn';

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function AnimatedSection({ children, delay = 0 }: Props) {
  const animation = useFadeIn(delay);

  return (
    <Animated.View
      style={{
        opacity: animation.opacity,
        transform: [{ translateY: animation.translateY }],
      }}
    >
      {children}
    </Animated.View>
  );
}
