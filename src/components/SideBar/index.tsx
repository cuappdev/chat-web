import { Box as MUIBox, Grid as MUIGrid } from '@material-ui/core';
import { AppPicker } from 'components';
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
    <React.Fragment>
      <Grid item xs={12}>
        <AppName
          display="flex"
          flexDirection="row"
          alignItems="center"
          height="7vh"
        >
          Ithaca Transit
        </AppName>
      </Grid>
      <Grid item xs={3}>
        <AppPicker />
      </Grid>
      <Grid item xs={9}>
        <Box display="flex" flexDirection="column" height="83vh">
          {sectionComponent(SectionName.BugReports)}
          {sectionComponent(SectionName.CustomerService)}
          {sectionComponent(SectionName.FeatureRequests)}
        </Box>
      </Grid>
    </React.Fragment>
  );
};

const Box = styled(MUIBox)`
  flex: 1;
  background-color: ${theme.colors.backgroundWash};
  border-right-style: solid;
  border-right-color: ${theme.colors.mediumGrey};
  border-right-width: 1px;
`;

const AppName = styled(Box)`
  box-sizing: border-box;
  padding-left: 16px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.mediumGrey};
  border-bottom-width: 1px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.black};
`;

const Grid = styled(MUIGrid)`
  display: flex;
`;

const Section = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.darkGrey};
  text-align: left;
  padding-top: 24px;
  padding-bottom: 7px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SelectedSection = styled(Section)`
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.black};
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
