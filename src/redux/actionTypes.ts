import { InboxItem } from 'models';

export const CHANGE_SECTION = 'change-section';
export const SELECT_ITEM = 'select-item';

export enum SectionName {
  BugReports = 'Bug Reports',
  CustomerService = 'Customer Service',
  FeatureRequests = 'Feature Requests',
}

export type AppAction =
  | { type: typeof CHANGE_SECTION; sectionName: SectionName }
  | { type: typeof SELECT_ITEM; item?: InboxItem };
