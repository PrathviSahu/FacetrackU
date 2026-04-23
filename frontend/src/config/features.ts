export type FeatureFlags = {
  predictions: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  certificates: boolean;
  leaveManagement: boolean;
  attendanceAnalytics: boolean;
  timetable: boolean;
  reports: boolean;
};

const envFlag = (key: string, defaultValue: boolean): boolean => {
  const raw = process.env[key];
  if (raw === undefined) return defaultValue;
  if (raw === '1' || raw === 'true' || raw === 'TRUE') return true;
  if (raw === '0' || raw === 'false' || raw === 'FALSE') return false;
  return defaultValue;
};

// Defaults: keep core features on, push optional modules behind flags.
export const FEATURES: FeatureFlags = {
  predictions: envFlag('REACT_APP_FEATURE_PREDICTIONS', true),
  emailNotifications: envFlag('REACT_APP_FEATURE_EMAIL', true),
  smsNotifications: envFlag('REACT_APP_FEATURE_SMS', true),
  certificates: envFlag('REACT_APP_FEATURE_CERTIFICATES', true),
  leaveManagement: envFlag('REACT_APP_FEATURE_LEAVE', true),
  attendanceAnalytics: envFlag('REACT_APP_FEATURE_ANALYTICS', true),
  timetable: envFlag('REACT_APP_FEATURE_TIMETABLE', true),
  reports: envFlag('REACT_APP_FEATURE_REPORTS', true),
};

