import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from './design';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  onPress?: () => void;
  color: string;
};

export default function QuickActionButton({ icon, label, onPress, color }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.iconWrap, { backgroundColor: color }]}> 
        <Ionicons name={icon} size={24} color={COLORS.neutral.white} />
      </View>
      <Text style={styles.label} numberOfLines={2}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: (320 - SPACING.md * 2 - SPACING.xs * 4) / 4, // fallback width for variety of screens
    alignItems: 'center',
    marginHorizontal: SPACING.xs,
    marginBottom: SPACING.md,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xs,
    ...SHADOWS.small,
  },
  label: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.text.primary,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16,
  },
});
