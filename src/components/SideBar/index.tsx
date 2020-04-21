import { Grid } from '@material-ui/core';
import { DispatchProps } from 'components/dispatchProps';
import React from 'react';
import { connect } from 'react-redux';
import { changeSection } from 'redux/actions';
import { AppAction, SectionName } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export interface SideBarProps extends DispatchProps {
  globalSection: string;
}

export const SideBarComponent: React.FunctionComponent<SideBarProps> = ({
  dispatch,
  globalSection,
}) => {
  const sectionClicked = (section: SectionName) => {
    dispatch(changeSection(section));
  };

  const sectionComponent = (section: SectionName) => {
    const selected = section == globalSection;
    const onClick = () => sectionClicked(section);

    return selected ? (
      <SelectedSection onClick={onClick} role="button">
        {section}
      </SelectedSection>
    ) : (
      <Section onClick={onClick} role="button">
        {section}
      </Section>
    );
  };

  return (
    <Container container direction="column">
      <AppName>patch</AppName>
      {sectionComponent(SectionName.BugReports)}
      {sectionComponent(SectionName.CustomerService)}
      {sectionComponent(SectionName.FeatureRequests)}
    </Container>
  );
};

const AppName = styled.div`
  font-family: Roboto;
  font-size: 48px;
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.white};
  margin-bottom: 220px;
`;

const Container = styled(Grid)`
  height: 100vh;
  width: 257.6px;
  padding-top: 32px;
  padding-left: 32px;
  background-color: #585858;
`;

const Section = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.backgroundWash};
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const SelectedSection = styled(Section)`
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
`;

const mapStateToProps = (state: AppState) => ({
  globalSection: state.sectionName,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBarComponent);
