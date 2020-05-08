import { Box as MUIBox } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export const TopBarComponent: React.FunctionComponent = () => {
  return <Box height="10vh"></Box>;
};

const Box = styled(MUIBox)`
  flex: 1;
  background-color: ${theme.colors.backgroundWash};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.mediumGrey};
  border-bottom-width: 1px;
`;

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const TopBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBarComponent);
