import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vaccinaties = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      viewBox="0 0 25 36"
      fill="#000"
      {...rest}
    >
      <path d="M23.7999 10.6731C23.1655 9.99148 20.3237 6.93796 19.6894 6.25638C19.017 5.53388 18.0304 6.48198 18.4664 7.32516C18.9738 8.30667 19.2466 8.76332 19.2466 8.76332L16.9305 11.2519C16.9305 11.2519 17.3244 12.0949 18.0044 13.5719C18.0707 13.7158 17.9926 13.7691 17.9682 13.7811C17.9682 13.7811 14.3231 9.86512 13.5495 9.03389C13.0296 8.47593 11.9834 9.33535 12.4415 10.2061C12.8893 11.0576 13.5251 12.1847 13.5251 12.1847L5.87257 20.4073C5.62211 20.6764 5.45139 21.0191 5.38191 21.3923L4.5788 25.9091L0 31H1.54267L5.5049 26.9104L9.72119 26.0569C10.0703 25.9829 10.391 25.799 10.6425 25.5287L18.2933 17.308C18.2933 17.308 19.3422 17.9912 20.1346 18.4724C20.945 18.9646 21.7448 17.8405 21.2256 17.2818C20.4492 16.4477 19.4942 15.4215 18.4922 14.3449L21.4667 11.1489C21.4667 11.1489 21.8917 11.4419 22.8051 11.9872C23.5899 12.4557 24.4722 11.3956 23.7999 10.6731ZM15.3206 17.7528L14.0519 16.3897L13.4176 17.7528L14.3691 18.7752L13.4176 19.7976L12.149 18.4344L11.5146 19.7976L12.4661 20.82L11.5146 21.8423L10.2459 20.4792L9.61161 21.8424L10.5631 22.8647L9.61161 23.8871L7.39147 21.5016L14.6863 13.6633L16.9065 16.0489L15.3206 17.7528Z" />
    </svg>
  );
});

Vaccinaties.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Vaccinaties.displayName = 'Vaccinaties';

export default Vaccinaties;
