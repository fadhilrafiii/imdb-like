import React from 'react';

import './index.css';
import { TrayBoxProps } from './Types';

const TrayBox = ({ isOpen, children, onClose }: TrayBoxProps) => {
  return (
    <div
      draggable
      className={`tray-box ${isOpen ? 'opened' : ''}`}
      onDragEnd={onClose}
    >
      <div
        className="close-drag-container"
        role="presentation"
        onClick={onClose}
      >
        <div className="close-drag" />
      </div>
      <div className="tray-box-content">{children}</div>
    </div>
  );
};

export default TrayBox;
