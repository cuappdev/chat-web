import {
  AppAction,
  CHANGE_SECTION,
  SectionName,
  SELECT_ITEM,
} from './actionTypes';
import { InboxItem } from 'models';

export interface AppState {
  sectionName: SectionName;
  selectedItem: InboxItem | undefined;
}

export const initialState: AppState = {
  sectionName: SectionName.BugReports,
  selectedItem: undefined,
};

export default function reducer(
  state: AppState = initialState,
  action: AppAction,
) {
  switch (action.type) {
    case CHANGE_SECTION:
      return {
        sectionName: action.sectionName,
        selectedItem: state.selectedItem,
      };
    case SELECT_ITEM:
      return {
        sectionName: state.sectionName,
        selectedItem: action.item,
      };
    default:
      return state;
  }
}
