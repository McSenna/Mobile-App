import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS, LAYOUT } from './ui/design';

type Props = {
  visible: boolean;
  onClose: () => void;
  username: string;
  setUsername: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
};

export default function LoginModal({ visible, onClose, username, setUsername, password, setPassword, showPassword, setShowPassword }: Props) {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.close} onPress={onClose} accessibilityLabel="Close login screen" accessibilityRole="button">
              <Ionicons name="close" size={24} color={COLORS.text.secondary} />
            </TouchableOpacity>

            <View style={styles.iconContainer}>
              <View style={styles.iconWrap}>
                <Ionicons name="shield-checkmark" size={32} color={COLORS.primary.main} />
              </View>
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to access your health services</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputWrap}>
                <Ionicons name="person-outline" size={20} color={COLORS.neutral.gray400} style={styles.inputIcon} />
                <TextInput value={username} onChangeText={setUsername} style={styles.input} placeholder="Enter your username" placeholderTextColor={COLORS.neutral.gray400} autoCapitalize="none" accessibilityLabel="Username input field" />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrap}>
                <Ionicons name="lock-closed-outline" size={20} color={COLORS.neutral.gray400} style={styles.inputIcon} />
                <TextInput value={password} onChangeText={setPassword} style={[styles.input, styles.password]} placeholder="Enter your password" placeholderTextColor={COLORS.neutral.gray400} secureTextEntry={!showPassword} accessibilityLabel="Password input field" />
                <TouchableOpacity style={styles.passwordToggle} onPress={() => setShowPassword(!showPassword)} accessibilityLabel={showPassword ? 'Hide password' : 'Show password'} accessibilityRole="button">
                  <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={COLORS.neutral.gray400} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgot} accessibilityLabel="Forgot password" accessibilityRole="button">
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.login} activeOpacity={0.8} accessibilityLabel="Sign in button" accessibilityRole="button">
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.registerRow}>
              <Text style={styles.registerText}>{'Don\'t have an account?'}</Text>
              <TouchableOpacity accessibilityLabel="Create new account" accessibilityRole="button">
                <Text style={styles.registerLink}>Register now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.neutral.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: LAYOUT.height * 0.9,
    ...SHADOWS.large,
  },
  header: {
    alignItems: 'center',
    paddingTop: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.neutral.gray100,
  },
  close: {
    position: 'absolute',
    right: SPACING.md,
    top: SPACING.md,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.neutral.gray50,
  },
  iconContainer: { marginBottom: SPACING.md },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primary.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: TYPOGRAPHY.xxl, fontWeight: '700', color: COLORS.text.primary, marginBottom: SPACING.xs },
  subtitle: { fontSize: TYPOGRAPHY.base, color: COLORS.text.secondary, textAlign: 'center' },

  form: { paddingHorizontal: SPACING.lg, paddingTop: SPACING.lg },
  inputGroup: { marginBottom: SPACING.md },
  label: { fontSize: TYPOGRAPHY.sm, fontWeight: '600', color: COLORS.text.primary, marginBottom: SPACING.xs },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.neutral.gray50,
    borderWidth: 1.5,
    borderColor: COLORS.neutral.gray200,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    minHeight: 52,
  },
  inputIcon: { marginRight: SPACING.sm },
  input: { flex: 1, fontSize: TYPOGRAPHY.base, color: COLORS.text.primary, paddingVertical: SPACING.sm },
  password: { paddingRight: SPACING.xs },
  passwordToggle: { padding: SPACING.xs, marginLeft: SPACING.xs },
  forgot: { alignSelf: 'flex-end', paddingVertical: SPACING.xs, marginBottom: SPACING.md },
  forgotText: { fontSize: TYPOGRAPHY.sm, color: COLORS.primary.main, fontWeight: '600' },
  login: { backgroundColor: COLORS.primary.main, borderRadius: 12, paddingVertical: SPACING.md, alignItems: 'center', justifyContent: 'center', minHeight: 52, ...SHADOWS.medium },
  loginText: { fontSize: TYPOGRAPHY.lg, fontWeight: '600', color: COLORS.neutral.white },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: SPACING.lg },
  line: { flex: 1, height: 1, backgroundColor: COLORS.neutral.gray200 },
  dividerText: { fontSize: TYPOGRAPHY.sm, color: COLORS.text.tertiary, marginHorizontal: SPACING.md },
  registerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: SPACING.xs },
  registerText: { fontSize: TYPOGRAPHY.base, color: COLORS.text.secondary },
  registerLink: { fontSize: TYPOGRAPHY.base, color: COLORS.primary.main, fontWeight: '600' },
});
