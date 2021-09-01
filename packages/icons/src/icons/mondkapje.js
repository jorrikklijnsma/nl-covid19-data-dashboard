import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Mondkapje = forwardRef(({ ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      role="img"
      focusable="false"
      width={32}
      height={32}
      fill="none"
      {...rest}
    >
      <path fill="#fff" d="M0 0h32v32H0z" />
      <path
        d="M24.424 24.38c-.485-.475-1.333-.949-2.303-1.304-.606-.237-2.545-.948-2.666-1.067 0-.355-.122-.71-.122-1.066.606-.474 1.091-.948 1.94-1.54.12-.119.242-.356.12-.593l-.242-.473c0-.119.122-.474.122-.593v-.355c.363-.474.606-1.185.606-2.015 0-.355 0-1.066-.485-1.658.485-2.607-1.091-5.095-3.636-5.925-.364-.355-.728-.473-1.212-.473 0-.119.12-.119.242-.119.606-.118 1.454 0 2.06.119.122-.237.364-.948.364-1.304C19.212 4.83 18.242 4 17.03 4c-.97 0-1.576.474-2.182 1.185-.727.948-1.212.355-.727-.356 0 0-1.454.119-1.454 1.185 0 .83.848 1.54 1.212 1.777-2.182.83-3.637 3.2-3.152 5.688-.485.592-.485 1.303-.485 1.658 0 .83.243 1.54.606 2.015v.355c.122.237.122.474.122.592l-.243.474c-.12.237 0 .474.121.593.849.71 1.334 1.185 1.94 1.54 0 .356-.121.711-.121 1.067-.121 0-2.425 1.066-2.667 1.066-.97.355-1.818.83-2.303 1.303C6.848 24.972 6.242 27.578 6 29h20c-.121-1.185-.727-3.791-1.576-4.62zm-12.97-9.243c0-.237 0-.829.243-.947.121-.119.364 0 .485.118 0-.355 0-1.303.364-2.251a5.35 5.35 0 013.515-1.303c1.333 0 2.545.473 3.515 1.421v.119c.121.237.121.592.121.83.121.473.121.947.121 1.303.121-.119.364-.237.485-.119.364 0 .485.356.485.83v.236c-1.576 0-2.546-.118-2.91-.355-.484-.355-.848-.83-1.696-.83-.97 0-1.333.475-1.818.83-.243.237-1.213.355-2.91.474v-.356zm.364 3.555c.121-.119.121-.237.121-.355l2.425.592s.12-.119 0-.119l-2.546-1.421c0-.356-.121-.593-.121-.948 2.06 0 2.788-.237 3.273-.593.484-.355.606-.592 1.09-.592.364 0 .607.237 1.091.592.485.356 1.213.593 3.273.593 0 .355 0 .592-.121.948l-2.545 1.421c-.122.119-.122.119 0 .119l2.424-.592c0 .118.121.118.121.355-.485.355-.727.592-1.09.948-.97.948-1.698 1.303-3.031 1.303-1.455 0-2.06-.355-3.03-1.185a8.803 8.803 0 01-1.334-1.066zm4.364 7.583s-4-.119-4.97-2.488c1.576-.593 2.667-.83 2.667-1.659 0-.119 0-.355.121-.593.606.238 1.212.356 2.182.356.848 0 1.576-.118 2.182-.355v.592c.12.83 1.09.948 2.666 1.659-.848 2.37-4.848 2.488-4.848 2.488z"
        fill="#000"
      />
    </svg>
  );
});

Mondkapje.propTypes = {
  // color: PropTypes.string,
  // size: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
};

Mondkapje.displayName = 'Mondkapje';

export default Mondkapje;