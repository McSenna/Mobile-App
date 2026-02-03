import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedSection from './AnimatedSection';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from './design';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title: string;
  content: string;
  color: string;
  delay?: number;
};

export default function InfoSection({ icon, title, content, color, delay = 0 }: Props) {
  return (
    <AnimatedSection delay={delay}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.icon, { backgroundColor: color }]}> 
            <Ionicons name={icon} size={22} color={COLORS.neutral.white} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </AnimatedSection>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  title: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: '600',
    color: COLORS.text.primary,
    flex: 1,
  },
  content: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    lineHeight: 24,
  },
});
