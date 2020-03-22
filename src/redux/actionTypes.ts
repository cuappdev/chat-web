export const CHANGE_SECTION = 'change-section';

export enum SectionName {
  BugReports = 'Bug Reports',
  CustomerService = 'Customer Service',
  FeatureRequests = 'Feature Requests',
}

export type AppAction =
  | { type: typeof CHANGE_SECTION, sectionName: SectionName };
