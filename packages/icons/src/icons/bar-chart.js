import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BarChart = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      viewBox="0 0 27 36"
      fill="#000"
      {...rest}
    >
      <path d="M1.8623 13.0172C1.8623 12.3031 2.32546 11.7241 2.89679 11.7241H4.55196C5.12329 11.7241 5.58644 12.3031 5.58644 13.0172V27.5517H1.8623V13.0172Z" />
      <path d="M8.37939 9.2931C8.37939 8.57894 8.84254 8 9.41388 8H11.069C11.6404 8 12.1035 8.57894 12.1035 9.2931V27.5517H8.37939V9.2931Z" />
      <path d="M14.8965 17.6725C14.8965 16.9583 15.3596 16.3794 15.931 16.3794H17.5861C18.1575 16.3794 18.6206 16.9583 18.6206 17.6725V27.5518H14.8965V17.6725Z" />
      <path d="M21.4136 13.0172C21.4136 12.3031 21.8767 11.7241 22.4481 11.7241H24.1032C24.6746 11.7241 25.1377 12.3031 25.1377 13.0172V27.5517H21.4136V13.0172Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 28.3152C27 28.4077 26.925 28.4827 26.8325 28.4827H0.167518C0.0750004 28.4827 0 28.4077 0 28.3152V26.7881C0 26.6956 0.0750003 26.6206 0.167518 26.6206H26.8325C26.925 26.6206 27 26.6956 27 26.7881V28.3152Z"
      />
    </svg>
  );
});

BarChart.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

BarChart.displayName = 'BarChart';

export default BarChart;