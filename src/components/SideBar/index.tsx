import classNames from 'classnames';
import { connect } from 'react-redux';
import React from 'react';

import { DispatchProps } from '../dispatchProps';
import { changeSection } from '../../redux/actions';
import { AppAction, SectionName } from '../../redux/actionTypes';
import { AppState } from '../../redux/reducer';
import './styles.scss';

const SECTION_TEXT = 'section-text';

interface SideBarProps extends DispatchProps {
  sectionName: string
}

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  dispatch,
  sectionName,
}) => {
  const sectionClicked = (section: SectionName) => {
    dispatch(changeSection(section));
  };

  return (
    <div className="menu-container">
      <div className="app-name">patch</div>
      <div
        className={classNames(SECTION_TEXT, { 'selected-section': sectionName === SectionName.BugReports })}
        onClick={() => sectionClicked(SectionName.BugReports)}
        role="button"
      >
        {SectionName.BugReports}
      </div>
      <div
        className={classNames(SECTION_TEXT, { 'selected-section': sectionName === SectionName.CustomerService })}
        onClick={() => sectionClicked(SectionName.CustomerService)}
        role="button"
      >
        {SectionName.CustomerService}
      </div>
      <div
        className={classNames(SECTION_TEXT, { 'selected-section': sectionName === SectionName.FeatureRequests })}
        onClick={() => sectionClicked(SectionName.FeatureRequests)}
        role="button"
      >
        {SectionName.FeatureRequests}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
