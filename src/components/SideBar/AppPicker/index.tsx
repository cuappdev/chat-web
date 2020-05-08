import {
  Box as MUIBox,
  ButtonBase as MUIButton,
  StylesProvider,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export const AppPickerComponent: React.FunctionComponent = () => {
  return (
    <StylesProvider injectFirst>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="83vh"
      >
        <Button>
          <ButtonImage
            src={require('../../../images/app-icon.png')}
          ></ButtonImage>
        </Button>
        <Button>
          <ButtonImage
            src={require('../../../images/app-icon.png')}
          ></ButtonImage>
        </Button>
        <Button>
          <ButtonImage
            src={require('../../../images/app-icon.png')}
          ></ButtonImage>
        </Button>
        <Button>
          <ButtonImage
            src={require('../../../images/app-icon.png')}
          ></ButtonImage>
        </Button>
      </Box>
    </StylesProvider>
  );
};

const Button = styled(MUIButton)`
  &.MuiButtonBase-root {
    height: 45px;
    width: 45px;
  }
  border-radius: 8.2px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Box = styled(MUIBox)`
  flex: 1;
  box-sizing: border-box;
  background-color: ${theme.colors.backgroundWash};
  border-right-style: solid;
  border-right-color: ${theme.colors.mediumGrey};
  border-right-width: 1px;
  padding-top: 8px;
`;

const ButtonImage = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 8.2px;
`;

const mapStateToProps = (state: AppState) => state;
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const AppPicker = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppPickerComponent);
