import { Link, Typography } from '@material-ui/core';
import { Variant as TypographyVariant } from '@material-ui/core/styles/createTypography';
import React, { ReactNode } from 'react';
import theme from 'styles/theme';

export interface TextProps {
  children: ReactNode;
  color?: string;
  fontWeight?: number;
  lineHeight?: string;
  opacity?: number;
  style?: any;
  variant?: TypographyVariant;
  underline?: boolean;
  onClick?: () => void;
}

export const Text: React.FunctionComponent<TextProps> = ({
  children,
  color = theme.colors.black,
  fontWeight,
  lineHeight,
  opacity = 1,
  variant,
  underline,
  onClick,
  style = {},
  ...rest
}) => {
  const finalStyle = { ...style };
  finalStyle.color = color;
  finalStyle.opacity = opacity;
  if (underline) {
    finalStyle.textDecoration = 'underline';
  }
  if (fontWeight) {
    finalStyle.fontWeight = fontWeight;
  }
  if (lineHeight) {
    finalStyle.lineHeight = lineHeight;
  }
  return (
    <Typography {...rest} variant={variant} style={finalStyle}>
      <Link style={{ textDecoration: 'none', ...finalStyle }} onClick={onClick}>
        {children}
      </Link>
    </Typography>
  );
};
