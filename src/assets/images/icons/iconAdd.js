import React from 'react';

function IcAdd(props) {
  return (
    <div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="14" fill={props.backgroundColor ? 'currentColor' : '#FFD500'} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 6.70703C14.3452 6.70703 14.625 6.98685 14.625 7.33203V20.6654C14.625 21.0105 14.3452 21.2904 14 21.2904C13.6548 21.2904 13.375 21.0105 13.375 20.6654V7.33203C13.375 6.98685 13.6548 6.70703 14 6.70703Z"
          fill="#333333"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.70703 14C6.70703 13.6548 6.98685 13.375 7.33203 13.375H20.6654C21.0105 13.375 21.2904 13.6548 21.2904 14C21.2904 14.3452 21.0105 14.625 20.6654 14.625H7.33203C6.98685 14.625 6.70703 14.3452 6.70703 14Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
}

export default IcAdd;
