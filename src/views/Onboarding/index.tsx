import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { AppAction } from 'redux/actionTypes';
import { AppState } from 'redux/reducer';
import styled from 'styled-components';
import theme from 'styles/theme';

export const OnboardingComponent: React.FunctionComponent = () => {
  return (
    <Background
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Logo mt={5} mb={3} />
        <TitleText mb={2}>Welcome to Patch</TitleText>
        <SubtitleText>Sign in to connect with your customers</SubtitleText>
        <GoogleSigninContainer mt={4} />
      </Container>
      <Footer display="flex" alignItems="center">
        <SubtitleText>Testing1</SubtitleText>
        <SubtitleText>Testing2</SubtitleText>
      </Footer>
    </Background>
  );
};

const Background = styled(Box)`
  background-color: #d8d8d8;
  height: 100vh;
  width: 100vw;
`;

const Container = styled(Box)`
  width: 410px;
  height: 364px;
  background-color: #efefef;
`;

const Footer = styled(Box)``;

const GoogleSigninContainer = styled(Box)`
  width: 100%;
  height: 87px;
  background-color: ${theme.colors.white};
`;

const Logo = styled(Box)`
  width: 107px;
  height: 107px;
  background-color: #76ac92;
`;

const TitleText = styled(Box)`
  font-family: Roboto;
  font-size: 36px;
  font-weight: ${theme.fontWeights.bold};
  letter-spacng: -1px;
  color: ${theme.colors.darkGrey};
`;

const SubtitleText = styled(Typography)`
  font-family: Roboto;
  font-size: 18px;
  font-weight: ${theme.fontWeights.regular}
  color: ${theme.colors.darkGrey};
`;

const mapStateToProps = (state: AppState) => ({
  globalSection: state.sectionName,
});
const mapDispatchToProps = (dispatch: any) => ({
  dispatch: (action: AppAction) => dispatch(action),
});

export const Onboarding = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnboardingComponent);
