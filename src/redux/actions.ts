import {
  AppAction,
  CHANGE_SECTION,
  SectionName,
  SELECT_ITEM,
} from './actionTypes';
import { InboxItem } from 'models';

export function changeSection(sectionName: SectionName): AppAction {
  return { type: CHANGE_SECTION, sectionName };
}

export function selectInboxItem(item?: InboxItem): AppAction {
  return { type: SELECT_ITEM, item };
}
