import React from 'react';

import classnames from 'classnames';

import './index.css';
import { ButtonColor, ButtonProps, ButtonSize, ButtonType } from './Types';

const Button = ({
  color = ButtonColor.PRIMARY,
  buttonType = ButtonType.FILLED,
  children,
  onClick = () => {},
  size = ButtonSize.MEDIUM,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classnames(color, buttonType, size, rest.className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Object.assign(Button, {
  Size: ButtonSize,
  Type: ButtonType,
  Color: ButtonColor,
});
