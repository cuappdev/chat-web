import { Box as MUIBox, Grid as MUIGrid } from '@material-ui/core';
import { styled as muiStyled } from '@material-ui/core/styles';
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

const Box = muiStyled(MUIBox)({
  flex: 1,
  backgroundColor: `${theme.colors.backgroundWash}`,
  borderRightStyle: 'solid',
  borderRightColor: `${theme.colors.mediumGrey}`,
  borderRightWidth: '1px',
});

const AppName = muiStyled(Box)({
  boxSizing: 'border-box',
  paddingLeft: '16px',
  borderBottomStyle: 'solid',
  borderBottomColor: `${theme.colors.mediumGrey}`,
  borderBottomWidth: '1px',
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: theme.fontWeights.medium,
  color: `${theme.colors.black}`,
});

const Grid = muiStyled(MUIGrid)({
  display: 'flex',
});

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
  cursor: pointer;
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
