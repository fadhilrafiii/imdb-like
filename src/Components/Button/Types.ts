import { ButtonHTMLAttributes } from 'react';

export enum ButtonType {
  FILLED = 'filled',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type ButtonProps = {
  buttonType?: ButtonType;
  size?: ButtonSize;
  children: JSX.Element | string;
  color?: ButtonColor;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
