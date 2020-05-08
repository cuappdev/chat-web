import { Box as MUIBox, ButtonBase as MUIButton } from '@material-ui/core';
import { styled as muiStyled } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export const AppPickerComponent: React.FunctionComponent = () => {
  return (
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
  );
};

const Button = muiStyled(MUIButton)({
  '&.MuiButtonBase-root': {
    height: '45px',
    width: '45px',
  },
  borderRadius: '8.2px',
  marginTop: '8px',
  marginBottom: '8px',
});

const Box = muiStyled(MUIBox)({
  flex: 1,
  boxSizing: 'border-box',
  backgroundColor: `${theme.colors.backgroundWash}`,
  borderRightStyle: 'solid',
  borderRightColor: `${theme.colors.mediumGrey}`,
  borderRightWidth: '1px',
  paddingTop: '8px',
});

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
