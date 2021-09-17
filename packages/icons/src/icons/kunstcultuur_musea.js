import React, { forwardRef } from 'react';

const KunstcultuurMusea = forwardRef(({ ...rest }, ref) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.9435 13.3338C28.9435 13.3338 29.0976 13.4879 29.0976 13.6421V14.721H7.05615V13.6421C7.05615 13.3338 7.05615 13.3338 7.21029 13.1797L17.3833 7.16834C17.8457 7.0142 18.3081 7.0142 18.6164 7.16834L28.9435 13.3338ZM16.6126 11.6383C16.6126 12.409 17.2291 13.0255 17.9998 13.0255C18.7705 13.0255 19.3871 12.409 19.3871 11.6383C19.3871 10.8676 18.7705 10.0969 17.9998 10.0969C17.2291 10.0969 16.6126 10.8676 16.6126 11.6383Z"
      />
      <path d="M28.6352 26.2812V27.9767H30.3307V29.6722H5.66895V27.9767H10.4472C10.4472 27.9767 10.4472 27.8226 10.293 27.8226L7.36444 27.2061V26.1271H9.21408V15.4917H11.8344V26.1271H16.7668V15.4917H19.3871V26.1271H24.1653V15.4917H26.9397V26.2812H28.6352Z" />
    </svg>
  );
});

KunstcultuurMusea.displayName = 'KunstcultuurMusea';

export default KunstcultuurMusea;
