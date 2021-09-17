import React, { forwardRef } from 'react';

const Bibliotheken = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      focusable="false"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="currentColor"
      {...rest}
    >
      <path d="M27.2648 6.625C27.2648 6.625 16.257 6.625 13.505 6.625C10.7531 6.625 7.81763 7.72579 7.81763 10.6612C7.81763 16.3486 7.81763 20.9352 7.81763 26.6226C7.81763 28.2738 8.73495 29.3746 10.2027 29.3746C18.4586 29.3746 15.7066 29.3746 23.9625 29.3746C24.5129 29.3746 24.8798 29.0076 24.8798 28.4572V11.5785C24.8798 11.0281 24.5129 10.6612 23.9625 10.6612C19.5593 10.6612 14.9727 10.6612 10.5696 10.6612C10.2027 10.6612 10.0192 10.2943 10.2027 9.92736C10.5696 8.82657 12.7712 8.64311 13.505 8.64311C13.8719 8.64311 26.1641 8.64311 26.1641 8.64311V25.7053H27.4483C27.8152 25.7053 28.1822 25.3384 28.1822 24.9714V7.54232C28.1822 6.99193 27.8152 6.625 27.2648 6.625Z" />
    </svg>
  );
});

Bibliotheken.displayName = 'Bibliotheken';

export default Bibliotheken;
