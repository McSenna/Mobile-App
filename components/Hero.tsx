import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedSection from './ui/AnimatedSection';
import QuickActionButton from './ui/QuickActionButton';
import { COLORS, SPACING, TYPOGRAPHY } from './ui/design';

type Props = {
  onActionPress?: () => void;
};

export default function Hero({ onActionPress }: Props) {
  return (
    <View style={styles.hero}>
      <AnimatedSection delay={100}>
        <View style={styles.heroContent}>
          <View style={styles.badge}>
            <Ionicons name="heart" size={16} color={COLORS.secondary.main} />
            <Text style={styles.badgeText}>Para sa Komunidad</Text>
          </View>
          <Text style={styles.title}>Healthcare Appointment System</Text>
          <Text style={styles.description}>Book your health check-ups easily. No more long lines. Better health services for all Maslog residents.</Text>
        </View>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <View style={styles.quickActions}>
          <Text style={styles.label}>Quick Actions</Text>
          <View style={styles.grid}>
            <QuickActionButton icon="calendar" label="Book Appointment" color={COLORS.primary.main} onPress={onActionPress} />
            <QuickActionButton icon="document-text" label="View Records" color={COLORS.secondary.main} onPress={onActionPress} />
            <QuickActionButton icon="time" label="Queue Status" color={COLORS.accent.warm} onPress={onActionPress} />
            <QuickActionButton icon="call" label="Contact Us" color={COLORS.status.info} onPress={onActionPress} />
          </View>
        </View>
      </AnimatedSection>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: COLORS.neutral.white,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  heroContent: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.secondary.lighter,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 16,
    marginBottom: SPACING.md,
    gap: SPACING.xs,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.secondary.main,
    fontWeight: '600',
  },
  title: {
    fontSize: TYPOGRAPHY.xxxl,
    fontWeight: '700',
    color: COLORS.text.primary,
    lineHeight: 36,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    lineHeight: 24,
  },
  quickActions: {
    paddingHorizontal: SPACING.md,
  },
  label: {
    fontSize: TYPOGRAPHY.sm,
    fontWeight: '600',
    color: COLORS.text.secondary,
    marginBottom: SPACING.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SPACING.xs,
  },
});
