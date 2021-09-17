import React, { forwardRef } from 'react';

const FrisseLucht = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      focusable="false"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2816 5H6.49655C5.80916 5 5.53568 5.5913 5.48486 5.88696V27.3541C5.48486 27.6867 5.81747 27.9823 5.98378 28.0886L13.6754 32.8976C14.5069 33.2579 14.955 32.5788 14.9642 32.2323V27.6867H22.2816C22.9136 27.6867 23.0715 27.0492 23.0715 26.7304V21.7274C22.5837 22.0822 21.6672 22.4296 21.2699 22.559V25.8019H14.9642V10.2109C14.9642 9.88935 14.7425 9.67962 14.6316 9.61495L9.75334 6.89864H21.3808V11.1394C21.9462 10.6959 22.762 10.391 23.0993 10.294V5.77609C23.0993 5.15522 22.5542 5 22.2816 5ZM9.53529 8.89326L7.47632 7.75641C7.40967 7.71961 7.32798 7.76781 7.32798 7.84395V16.3606C7.32798 16.3969 7.34759 16.4303 7.37924 16.448L9.43821 17.5974C9.50486 17.6347 9.58695 17.5865 9.58695 17.5101V8.9808C9.58695 8.94439 9.56716 8.91086 9.53529 8.89326ZM11.0798 9.69687L13.1388 10.8337C13.1706 10.8513 13.1904 10.8849 13.1904 10.9213V19.4506C13.1904 19.5269 13.1083 19.5751 13.0417 19.5379L10.9827 18.3884C10.9511 18.3708 10.9315 18.3373 10.9315 18.3011V9.78441C10.9315 9.70828 11.0132 9.66007 11.0798 9.69687ZM9.53529 19.2047L7.47632 18.0678C7.40967 18.031 7.32798 18.0792 7.32798 18.1554V26.6754C7.32798 26.7098 7.34573 26.7419 7.37494 26.7601L9.43391 28.0486C9.50051 28.0903 9.58695 28.0424 9.58695 27.9638V19.2922C9.58695 19.2558 9.56716 19.2223 9.53529 19.2047ZM11.0798 20.0078L13.1388 21.1447C13.1706 21.1623 13.1904 21.1958 13.1904 21.2322V30.2761C13.1904 30.3551 13.1032 30.4029 13.0366 30.3604L10.9777 29.0467C10.9489 29.0283 10.9315 28.9966 10.9315 28.9624V20.0954C10.9315 20.0192 11.0132 19.971 11.0798 20.0078Z"
        fill="black"
      />
      <path
        d="M22.1986 11.7214C20.7795 12.8412 19.0527 12.1649 18.3321 11.7214C17.7361 11.4304 17.3065 11.8415 17.1818 12.054C17.0247 12.3035 16.8852 12.9216 17.5837 13.3983C18.4568 13.9942 19.912 14.1744 20.3554 14.1744C20.7989 14.1744 22.3095 13.9665 22.9332 13.3983C23.4321 12.9438 24.2959 12.7654 24.6655 12.7331C25.5857 12.6777 26.7842 13.4676 27.3818 13.7725C27.9251 14.0497 29.0495 14.1097 29.5438 14.1051L28.7122 15.394C28.5967 15.5372 28.424 15.8873 28.6568 16.1423C28.8896 16.3973 29.0957 16.341 29.1696 16.2809C30.1859 15.4309 32.2767 13.67 32.5095 13.426C32.7423 13.1821 32.6065 12.9271 32.5095 12.8301L29.1419 9.98909C28.6014 9.83664 28.4628 10.4464 28.5598 10.6127L29.5438 12.2481C28.4905 12.4975 27.853 12.0125 27.2294 11.6383C26.6057 11.2641 23.9726 10.3217 22.1986 11.7214Z"
        fill="black"
      />
      <path
        d="M26.6646 19.4651C28.0838 20.5849 29.8106 19.9086 30.5312 19.4651C31.1271 19.174 31.5568 19.5852 31.6815 19.7977C31.8386 20.0471 31.9781 20.6652 31.2796 21.142C30.4065 21.7379 28.9513 21.9181 28.5078 21.9181C28.0644 21.9181 26.5538 21.7102 25.9301 21.142C25.4312 20.6874 24.5674 20.5091 24.1978 20.4768C23.2776 20.4213 22.0791 21.2113 21.4815 21.5162C20.9382 21.7933 19.8138 21.8534 19.3195 21.8488L20.1511 23.1376C20.2665 23.2808 20.4393 23.631 20.2065 23.886C19.9737 24.141 19.7676 24.0846 19.6937 24.0246C18.6774 23.1746 16.5866 21.4136 16.3538 21.1697C16.1209 20.9258 16.2568 20.6708 16.3538 20.5738L19.7214 17.7327C20.2619 17.5803 20.4005 18.1901 20.3035 18.3564L19.3195 19.9917C20.3728 20.2412 21.0103 19.7561 21.6339 19.3819C22.2576 19.0077 24.8907 18.0653 26.6646 19.4651Z"
        fill="black"
      />
      <path
        d="M23.0855 14.3687C22.6864 14.7345 21.7458 14.9461 21.3254 15.0062V18.4708C21.7135 18.105 22.6697 17.8749 23.0855 17.8056V14.3687Z"
        fill="black"
      />
    </svg>
  );
});

FrisseLucht.displayName = 'FrisseLucht';

export default FrisseLucht;
