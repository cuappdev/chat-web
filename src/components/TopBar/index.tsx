import { Box as MUIBox } from '@material-ui/core';
import { styled as muiStyled } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import theme from 'styles/theme';

export const TopBarComponent: React.FunctionComponent = () => {
  return <Box height="10vh"></Box>;
};

const Box = muiStyled(MUIBox)({
  flex: 1,
  backgroundColor: `${theme.colors.backgroundWash}`,
  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.05)',
  borderBottomStyle: 'solid',
  borderBottomColor: `${theme.colors.mediumGrey}`,
  borderBottomWidth: '1px',
});

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const TopBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBarComponent);
