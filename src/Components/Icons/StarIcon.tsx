/* eslint-disable max-len */
import React from 'react';

import { IconProps } from './Types';

const StarIcon = ({ fill = '#e5e5e5' }: IconProps) => {
  return (
    <svg
      width="18px"
      height="17px"
      viewBox="0 0 18 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-273.000000, -4323.000000)">
          <g id="Toggle" transform="translate(100.000000, 4266.000000)">
            <g
              id="-Round-/-Toggle-/-star"
              transform="translate(170.000000, 54.000000)"
            >
              <g>
                <polygon
                  id="Path"
                  fillRule="nonzero"
                  points="0 0 24 0 24 24 0 24"
                />
                <path
                  d="M12,17.27 L16.15,19.78 C16.91,20.24 17.84,19.56 17.64,18.7 L16.54,13.98 L20.21,10.8 C20.88,10.22 20.52,9.12 19.64,9.05 L14.81,8.64 L12.92,4.18 C12.58,3.37 11.42,3.37 11.08,4.18 L9.19,8.63 L4.36,9.04 C3.48,9.11 3.12,10.21 3.79,10.79 L7.46,13.97 L6.36,18.69 C6.16,19.55 7.09,20.23 7.85,19.77 L12,17.27 Z"
                  id="🔹-Icon-Color"
                  fill={fill}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default StarIcon;
