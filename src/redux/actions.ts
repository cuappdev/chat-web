import { AppAction, CHANGE_SECTION, SectionName } from './actionTypes';

function changeSection(sectionName: SectionName): AppAction {
  return { type: CHANGE_SECTION, sectionName };
}

export default {
  changeSection,
};
