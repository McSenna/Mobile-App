import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedSection from './AnimatedSection';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from './design';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title: string;
  description: string;
  color: string;
  onPress?: () => void;
  delay?: number;
};

export default function ServiceCard({ icon, title, description, color, onPress, delay = 0 }: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <AnimatedSection delay={delay}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={onPress}
        style={[styles.card, pressed && styles.cardPressed]}
      >
        <View style={[styles.iconWrapper, { backgroundColor: color }]}>
          <Ionicons name={icon} size={28} color={COLORS.neutral.white} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={COLORS.neutral.gray400} />
      </TouchableOpacity>
    </AnimatedSection>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.neutral.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
    minHeight: 88,
  },
  cardPressed: {
    backgroundColor: COLORS.neutral.gray50,
    transform: [{ scale: 0.98 }],
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  content: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  title: {
    fontSize: TYPOGRAPHY.base,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
    lineHeight: 22,
  },
  description: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.text.secondary,
    lineHeight: 20,
  },
});
