import { AppAction, CHANGE_SECTION, SectionName } from './actionTypes';

export interface AppState {
  sectionName: SectionName
}

export const initialState: AppState = {
  sectionName: SectionName.BugReports,
};

export default function reducer(state: AppState = initialState, action: AppAction) {
  switch (action.type) {
    case CHANGE_SECTION:
      return {
        sectionName: action.sectionName,
      };
    default:
      return state;
  }
}
