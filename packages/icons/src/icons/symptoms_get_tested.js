import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SymptomsGetTested = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      width={32}
      height={32}
      fill="currentColor"
      viewBox="0 0 32 32"
      {...rest}
    >
      <path fill="#fff" d="M0 0h32v32H0z" />
      <path
        d="M20.204 22.171c.155-.472.772-.472.617-1.102 0-.316-.308-.473-.462-.473.154-.158.308-.315.462-.63 0-.158 0-.473-.154-.63-.463-.315-.463-.788-.463-.788l1.235-.63c.308-.315.463-.788.308-1.103l-2.469-2.836c-.154-.315 0-.945 0-1.26-.308-1.575-.926-3.308-.926-3.308.772-1.575.463-2.993-.771-3.78-1.39-.946-6.482-.946-10.34 1.102-4.012 2.205-3.55 6.301-2.932 8.35.772 2.362 3.087 5.828 3.24 8.349 0 1.102-.77 4.726-.77 4.726h8.796V25.48s-2.16-1.103-2.315-1.103c-.155 0 0-.158 0-.158s3.24.63 4.475.945c.926.158 1.852-.157 2.16-.63.927-1.102.31-1.733.31-2.363zM28.846 25.637l-3.087-3.15c0 .157-.154.157-.154.157l-.154-.157s.154-.158.154-.315c0-.158.154-.158-.309-.63-.154-.158-1.851-2.049-2.16-2.206-.154-.158-.463-.473-.772-.158-.308.316-.154.63.155.946l2.16 2.205c.463.473.463.315.617.315l3.241 3.308c.309.315.309.158.309 0 .154 0 .154-.157 0-.315z"
        fill="currentColor"
      />
    </svg>
  );
});

SymptomsGetTested.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

SymptomsGetTested.displayName = 'SymptomsGetTested';

export default SymptomsGetTested;