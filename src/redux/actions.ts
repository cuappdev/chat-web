import { AppAction, CHANGE_SECTION, SectionName } from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function changeSection(sectionName: SectionName): AppAction {
  return { type: CHANGE_SECTION, sectionName };
}
