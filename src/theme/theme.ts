export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  bgPrimary: string;
  textPrimary: string;
  textSecondary: string;
  accentColor: string;
  accentHover: string;
  uiSurface: string;
  uiBorder: string;
  codeBg: string;
  codeHeader: string;
}

export const lightTheme: ThemeColors = {
  bgPrimary: '#f0f3fc',
  textPrimary: '#111827',
  textSecondary: '#222526',
  accentColor: '#6274E0',
  accentHover: '#4255B2',
  uiSurface: '#e5e7eb',
  uiBorder: '#d1d5db',
  codeBg: '#ffffff',
  codeHeader: '#f9fafb',
};

export const darkTheme: ThemeColors = {
  bgPrimary: '#111313',
  textPrimary: '#f9fafb',
  textSecondary: '#e5e7eb',
  accentColor: '#6214E0',
  accentHover: '#7646E8',
  uiSurface: '#242425',
  uiBorder: '#4b5563',
  codeBg: '#111827',
  codeHeader: '#1f2937',
};
