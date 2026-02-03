import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useFadeIn from '@/hooks/useFadeIn';
import { SPACING, TYPOGRAPHY, COLORS, SHADOWS } from './ui/design';

type Props = {
  onProfilePress?: () => void;
};

export default function Header({ onProfilePress }: Props) {
  const animation = useFadeIn(0);

  return (
    <Animated.View style={[styles.header, { opacity: animation.opacity, transform: [{ translateY: animation.translateY }] }]}> 
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          <View style={styles.badge}>
            <Ionicons name="shield-checkmark" size={24} color={COLORS.primary.main} />
          </View>
          <View style={styles.titleWrap}>
            <Text style={styles.subtitle}>Barangay</Text>
            <Text style={styles.title}>Maslog</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={onProfilePress} activeOpacity={0.7} accessibilityLabel="Open login menu" accessibilityRole="button">
          <Ionicons name="person-circle-outline" size={32} color={COLORS.neutral.white} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary.main,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    ...SHADOWS.medium,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    minHeight: 64,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.neutral.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  titleWrap: {
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.primary.lighter,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: TYPOGRAPHY.xl,
    color: COLORS.neutral.white,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  profileButton: {
    padding: SPACING.xs,
    marginLeft: SPACING.sm,
  },
});
