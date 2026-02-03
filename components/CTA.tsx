import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from './ui/design';

type Props = {
  title?: string;
  description?: string;
  onPress?: () => void;
};

export default function CTA({ title = 'Ready to Get Started?', description = 'Join hundreds of residents already using our system', onPress }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8} accessibilityLabel="Sign in to access services" accessibilityRole="button">
        <Text style={styles.buttonText}>Sign In</Text>
        <Ionicons name="arrow-forward" size={20} color={COLORS.neutral.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.xl,
    backgroundColor: COLORS.primary.main,
    borderRadius: 20,
    padding: SPACING.lg,
    ...SHADOWS.medium,
  },
  content: { marginBottom: SPACING.md },
  title: {
    fontSize: TYPOGRAPHY.xxl,
    fontWeight: '700',
    color: COLORS.neutral.white,
    marginBottom: SPACING.xs,
  },
  description: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.primary.lighter,
    lineHeight: 22,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.neutral.white,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.xs,
    ...SHADOWS.small,
  },
  buttonText: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: '600',
    color: COLORS.primary.main,
    marginRight: SPACING.xs,
  },
});
