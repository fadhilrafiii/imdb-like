import { ReactElement } from 'react';

export type TrayBoxProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
};
