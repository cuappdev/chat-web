import {
  AppAction,
  CHANGE_SECTION,
  SectionName,
  SELECT_ITEM,
} from './actionTypes';
import { InboxItem } from 'models';

// eslint-disable-next-line import/prefer-default-export
export function changeSection(sectionName: SectionName): AppAction {
  return { type: CHANGE_SECTION, sectionName };
}

// eslint-disable-next-line import/prefer-default-export
export function selectInboxItem(item: InboxItem | undefined): AppAction {
  return { type: SELECT_ITEM, item };
}
