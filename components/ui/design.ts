// Shared design tokens for the Home screen (kept scoped to this feature)
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const TYPOGRAPHY = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  display: 32,
};

export const COLORS = {
  primary: {
    main: '#2563eb',
    light: '#3b82f6',
    lighter: '#dbeafe',
    dark: '#1e40af',
  },
  secondary: {
    main: '#059669',
    light: '#10b981',
    lighter: '#d1fae5',
  },
  accent: {
    warm: '#f59e0b',
    light: '#fef3c7',
  },
  neutral: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
    tertiary: '#6b7280',
    inverse: '#ffffff',
  },
  status: {
    success: '#059669',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#2563eb',
  },
};

export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
};

export const LAYOUT = { width, height };
