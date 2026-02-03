import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View, Text, Platform } from 'react-native';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import InfoSection from '@/components/ui/InfoSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';

import { SPACING, TYPOGRAPHY, COLORS, SHADOWS, LAYOUT } from '@/components/ui/design';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary.main} />

      <Header onProfilePress={() => setModalVisible(true)} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Hero onActionPress={() => setModalVisible(true)} />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <Text style={styles.sectionSubtitle}>What we offer to our community</Text>
          </View>

          <ServiceCard icon="calendar-outline" title="Easy Appointment Booking" description="Schedule your health check-up in just a few taps" color={COLORS.primary.main} delay={350} onPress={() => setModalVisible(true)} />
          <ServiceCard icon="shield-checkmark-outline" title="Secure Health Records" description="Your medical information, safe and private" color={COLORS.secondary.main} delay={400} onPress={() => setModalVisible(true)} />
          <ServiceCard icon="time-outline" title="Reduced Wait Times" description="No more long queues at the health center" color={COLORS.accent.warm} delay={450} onPress={() => setModalVisible(true)} />
          <ServiceCard icon="notifications-outline" title="Appointment Reminders" description="Get notified before your scheduled visit" color={COLORS.status.info} delay={500} onPress={() => setModalVisible(true)} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Commitment</Text>
            <Text style={styles.sectionSubtitle}>Building a healthier Maslog together</Text>
          </View>

          <InfoSection icon="flag" title="Our Mission" content="To provide accessible and efficient healthcare services to all Maslog residents through modern technology and compassionate care." color={COLORS.primary.main} delay={600} />
          <InfoSection icon="eye" title="Our Vision" content="A healthy and thriving barangay where every resident has easy access to quality healthcare services." color={COLORS.secondary.main} delay={650} />
          <InfoSection icon="trophy" title="Our Goals" content="Eliminate long waiting times, improve health records management, and ensure every resident receives timely medical attention." color={COLORS.accent.warm} delay={700} />
        </View>

        <CTA onPress={() => setModalVisible(true)} />

        <Footer />
      </ScrollView>

      <LoginModal visible={modalVisible} onClose={() => setModalVisible(false)} username={username} setUsername={setUsername} password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral.gray50,
  },
  
  // Header Styles - Optimized for branding and navigation
  header: {
    backgroundColor: COLORS.primary.main,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    ...SHADOWS.medium,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    minHeight: 64,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  barangayBadge: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.neutral.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },
  headerTextContainer: {
    justifyContent: "center",
  },
  headerSubtitle: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.primary.lighter,
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.xl,
    color: COLORS.neutral.white,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  profileButton: {
    padding: SPACING.xs,
    marginLeft: SPACING.sm,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: SPACING.xl,
  },

  // Hero Section - Clear, inviting, community-focused
  hero: {
    backgroundColor: COLORS.neutral.white,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  heroContent: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.secondary.lighter,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 16,
    marginBottom: SPACING.md,
    gap: SPACING.xs,
  },
  heroBadgeText: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.secondary.main,
    fontWeight: "600",
  },
  heroTitle: {
    fontSize: TYPOGRAPHY.xxxl,
    fontWeight: "700",
    color: COLORS.text.primary,
    lineHeight: 36,
    marginBottom: SPACING.sm,
  },
  heroDescription: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    lineHeight: 24,
    maxWidth: LAYOUT.width - SPACING.md * 2,
  },

  // Quick Actions - Touch-optimized, easily accessible
  quickActions: {
    paddingHorizontal: SPACING.md,
  },
  sectionLabel: {
    fontSize: TYPOGRAPHY.sm,
    fontWeight: "600",
    color: COLORS.text.secondary,
    marginBottom: SPACING.sm,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -SPACING.xs,
  },
  quickActionButton: {
    width: (LAYOUT.width - SPACING.md * 2 - SPACING.xs * 4) / 4,
    alignItems: "center",
    marginHorizontal: SPACING.xs,
    marginBottom: SPACING.md,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.xs,
    ...SHADOWS.small,
  },
  quickActionLabel: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.text.primary,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 16,
  },

  // Section Styles
  section: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xl,
  },
  sectionHeader: {
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.xxl,
    fontWeight: "700",
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  sectionSubtitle: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    lineHeight: 22,
  },

  // Service Card - Optimized for scanning and touch
  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.neutral.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
    minHeight: 88,
  },
  serviceCardPressed: {
    backgroundColor: COLORS.neutral.gray50,
    transform: [{ scale: 0.98 }],
  },
  serviceIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },
  serviceContent: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  serviceTitle: {
    fontSize: TYPOGRAPHY.base,
    fontWeight: "600",
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
    lineHeight: 22,
  },
  serviceDescription: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.text.secondary,
    lineHeight: 20,
  },

  // Info Section - Clear, readable information blocks
  infoSection: {
    backgroundColor: COLORS.neutral.white,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  infoIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },
  infoTitle: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: "600",
    color: COLORS.text.primary,
    flex: 1,
  },
  infoContent: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    lineHeight: 24,
  },

  // CTA Section
  ctaSection: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.xl,
    backgroundColor: COLORS.primary.main,
    borderRadius: 20,
    padding: SPACING.lg,
    ...SHADOWS.medium,
  },
  ctaContent: {
    marginBottom: SPACING.md,
  },
  ctaTitle: {
    fontSize: TYPOGRAPHY.xxl,
    fontWeight: "700",
    color: COLORS.neutral.white,
    marginBottom: SPACING.xs,
  },
  ctaDescription: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.primary.lighter,
    lineHeight: 22,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.neutral.white,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.xs,
    ...SHADOWS.small,
  },
  ctaButtonText: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: "600",
    color: COLORS.primary.main,
  },

  // Footer
  footer: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.md,
    alignItems: "center",
  },
  footerText: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.text.tertiary,
    marginBottom: SPACING.xs,
  },
  footerSubtext: {
    fontSize: TYPOGRAPHY.xs,
    color: COLORS.text.tertiary,
  },

  // Modal Styles - Accessible, clear, user-friendly
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: COLORS.neutral.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: LAYOUT.height * 0.9,
    ...SHADOWS.large,
  },
  modalContent: {
    paddingBottom: Platform.OS === "ios" ? SPACING.xl : SPACING.lg,
  },
  modalHeader: {
    alignItems: "center",
    paddingTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutral.gray100,
  },
  modalClose: {
    position: "absolute",
    right: SPACING.md,
    top: SPACING.md,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.neutral.gray50,
  },
  modalIconContainer: {
    marginBottom: SPACING.md,
  },
  modalIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primary.lighter,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: TYPOGRAPHY.xxl,
    fontWeight: "700",
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  modalSubtitle: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
    textAlign: "center",
  },

  // Form Section - Clear, accessible inputs
  formSection: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  inputLabel: {
    fontSize: TYPOGRAPHY.sm,
    fontWeight: "600",
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.neutral.gray50,
    borderWidth: 1.5,
    borderColor: COLORS.neutral.gray200,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    minHeight: 52,
  },
  inputIcon: {
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.primary,
    paddingVertical: SPACING.sm,
  },
  inputPassword: {
    paddingRight: SPACING.xs,
  },
  passwordToggle: {
    padding: SPACING.xs,
    marginLeft: SPACING.xs,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.md,
  },
  forgotPasswordText: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.primary.main,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: COLORS.primary.main,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
    ...SHADOWS.medium,
  },
  loginButtonText: {
    fontSize: TYPOGRAPHY.lg,
    fontWeight: "600",
    color: COLORS.neutral.white,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SPACING.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.neutral.gray200,
  },
  dividerText: {
    fontSize: TYPOGRAPHY.sm,
    color: COLORS.text.tertiary,
    marginHorizontal: SPACING.md,
  },
  registerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.xs,
  },
  registerText: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.text.secondary,
  },
  registerLink: {
    fontSize: TYPOGRAPHY.base,
    color: COLORS.primary.main,
    fontWeight: "600",
  },
});