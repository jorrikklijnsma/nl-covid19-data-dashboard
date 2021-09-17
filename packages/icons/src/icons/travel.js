import React, { forwardRef } from 'react';

const Travel = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="currentColor"
      {...rest}
    >
      <path d="M18.2412 8.98894C19.3904 8.49661 20.0965 7.78589 20.0157 7.26538C19.9407 6.78342 18.8591 6.19785 17.0705 6.9641C16.5334 7.1941 15.8537 7.48544 14.4062 8.1054L10.0681 6.5298C9.9848 6.49954 9.89321 6.50203 9.81199 6.53684L9.45227 6.691C9.37768 6.72291 9.3582 6.81947 9.41415 6.8779L11.6992 9.26494C11.6338 9.29312 11.5733 9.31881 11.5061 9.34782C10.5385 9.76223 9.73449 10.1605 9.08303 10.5177L6.39472 9.14766C6.30272 9.10083 6.19456 9.0971 6.09924 9.13771L5.75693 9.28441C5.684 9.31549 5.66328 9.40915 5.71591 9.46841L7.51364 11.4912C7.29939 11.6466 7.14191 11.7759 7.04328 11.8699C6.8974 12.0092 6.94796 12.2516 7.14688 12.2815C8.34993 12.4621 10.7374 11.9619 12.2347 11.4966L11.1327 15.3643C11.1062 15.4584 11.2003 15.5413 11.2902 15.5027L12.0378 15.1824C12.1 15.1558 12.153 15.1115 12.1907 15.0551L15.4232 10.1953C16.5512 9.71292 17.8367 9.16216 18.2412 8.98894Z" />
      <path d="M28.7031 20.281C29.1064 20.0042 29.3596 19.6731 29.4309 19.509C29.5809 19.1658 29.4822 18.5732 28.9091 18.4622C28.6555 18.4128 28.1752 18.4593 27.7508 18.5193C27.4222 17.3349 26.8503 15.4096 26.5163 15.0611C26.0687 14.5932 24.4985 14.3599 21.058 14.3599C17.6175 14.3599 16.0473 14.5932 15.5997 15.0606C15.2661 15.4092 14.6938 17.3345 14.3656 18.5189C13.9413 18.4588 13.461 18.4124 13.2073 18.4617C12.6342 18.5728 12.5356 19.1654 12.6856 19.5086C12.7573 19.6727 13.0105 20.0038 13.4133 20.2806C12.7556 21.1658 12.5625 21.935 12.5625 23.3651C12.5625 25.213 12.5625 27.273 12.5625 27.273C12.5625 27.273 12.5625 28.4164 12.722 29.1777C12.7805 29.4545 13.0374 29.6518 13.3333 29.6518H15.5297C15.8256 29.6518 16.0825 29.4545 16.1406 29.1777C16.2297 28.7529 16.269 28.2092 16.2864 27.8114C16.2864 27.8114 14.4199 27.3845 14.2736 27.3456C14.1642 27.3166 14.0954 27.2623 14.1186 27.1487H27.997C28.0198 27.2623 27.9514 27.3166 27.8416 27.3456C27.6953 27.3845 25.8288 27.8114 25.8288 27.8114C25.8462 28.2092 25.8855 28.7525 25.975 29.1777C26.0335 29.4545 26.29 29.6518 26.5863 29.6518H28.7827C29.0786 29.6518 29.3355 29.4545 29.3936 29.1777C29.5535 28.4164 29.5535 27.273 29.5535 27.273C29.5535 27.273 29.5535 25.213 29.5535 23.3651C29.5535 21.935 29.3604 21.1658 28.7031 20.281ZM16.6047 15.9711C16.804 15.8721 18.2682 15.7022 21.058 15.7022C23.8479 15.7022 25.3116 15.8716 25.5113 15.9711C25.709 16.3068 26.3397 18.4825 26.5196 19.361C25.5266 19.637 23.266 19.8243 21.058 19.8243C18.85 19.8243 16.5894 19.637 15.5964 19.361C15.7767 18.4825 16.407 16.3064 16.6047 15.9711ZM17.1443 24.7994L15.1435 24.6394C14.6014 24.5963 14.2691 24.1637 14.17 23.6892L14.0875 23.116C14.0366 22.7617 14.4004 22.4609 14.7597 22.5607L16.3793 23.0108C16.7315 23.1463 16.9976 23.4215 17.1111 23.7671L17.3332 24.5918C17.3627 24.7008 17.264 24.8093 17.1443 24.7994ZM22.9229 25.922H19.1931V25.0932H22.9229V25.922ZM28.0285 23.116L27.946 23.6892C27.8465 24.1637 27.5146 24.5963 26.9725 24.6394L24.9717 24.7994C24.8524 24.8093 24.7538 24.7008 24.7832 24.5914L25.0053 23.7667C25.1189 23.421 25.3849 23.1459 25.7372 23.0104L27.3571 22.5603C27.7156 22.4604 28.0794 22.7613 28.0285 23.116Z" />
    </svg>
  );
});

Travel.displayName = 'Travel';

export default Travel;
