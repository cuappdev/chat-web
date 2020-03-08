import { AppAction } from '../redux/actionTypes';

export interface DispatchProps {
  dispatch: (action: AppAction) => any;
}
