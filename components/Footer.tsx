import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SPACING, TYPOGRAPHY, COLORS } from './ui/design';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2026 Barangay Maslog Health Services</Text>
      <Text style={styles.subtext}>Serving our community with care</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.md,
    alignItems: 'center',
  },
  text: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.text.tertiary,
    marginBottom: SPACING.xs,
  },
  subtext: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.text.tertiary,
  },
});
