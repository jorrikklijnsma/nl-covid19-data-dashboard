import React, { forwardRef } from 'react';

const WinkelenEnBoodschappenOpen = forwardRef(({ ...rest }, ref) => {
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
        d="M24.0909 21.0284H12.716C12.125 21.0284 11.8296 21.3239 11.8296 21.9148C11.8296 22.6534 12.4205 22.8011 12.716 22.8011C18.1819 22.9489 24.5341 23.0966 24.5341 23.0966C25.5682 23.0966 25.5682 24.7216 24.5341 24.7216H12.5682C10.6478 24.7216 9.76143 23.392 9.76143 21.7671C9.76143 19.6989 11.5342 19.2557 11.5342 19.2557L10.2046 9.65345C9.0228 9.65345 7.25006 9.50573 7.25006 8.47165C7.25006 8.02847 7.69322 7.58528 8.13639 7.58528H10.5001C11.0909 7.58528 11.6819 8.02847 11.6819 8.61936L11.8296 10.2444H25.5682C26.75 10.2444 26.75 11.4262 26.75 11.4262C26.75 11.4262 26.0114 17.9262 25.7159 19.4034C25.4204 21.1761 24.0909 21.0284 24.0909 21.0284ZM13.1591 19.2557H15.5227V16.3011H12.716L13.1591 19.2557ZM25.125 11.7216H21.875V14.6762H24.0909C24.0909 14.6762 24.2386 15.1194 24.3863 15.7103C24.3863 15.858 24.5341 15.858 24.5341 15.858L25.125 11.7216ZM24.3863 16.3011H21.875V19.2557H23.9432L24.3863 16.3011ZM20.25 11.7216H17.2955V14.6762H19.6591C19.6591 14.6762 19.8068 15.2671 20.1023 15.7103C20.1023 15.858 20.25 15.858 20.25 15.858V11.7216ZM20.25 16.3011H17.2955V19.2557H20.25V16.3011ZM15.6705 15.858V11.7216H12.125L12.5682 14.6762H15.0796C15.0796 14.6762 15.2273 15.2671 15.5227 15.7103C15.5227 15.858 15.6705 15.858 15.6705 15.858Z"
      />
      <path d="M12.2727 25.1648C11.3864 25.1648 10.6478 25.9034 10.6478 26.7898C10.6478 27.6761 11.3864 28.4147 12.2727 28.4147C13.1591 28.4147 13.8978 27.6761 13.8978 26.7898C13.8978 25.9034 13.1591 25.1648 12.2727 25.1648Z" />
      <path d="M23.2045 25.1648C22.3182 25.1648 21.5796 25.9034 21.5796 26.7898C21.5796 27.6761 22.3182 28.4147 23.2045 28.4147C24.0909 28.4147 24.8296 27.6761 24.8296 26.7898C24.8296 25.9034 24.0909 25.1648 23.2045 25.1648Z" />
    </svg>
  );
});

WinkelenEnBoodschappenOpen.displayName = 'WinkelenEnBoodschappenOpen';

export default WinkelenEnBoodschappenOpen;
