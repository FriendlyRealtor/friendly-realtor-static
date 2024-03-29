import React from 'react';

function Spinner({ formattedClassName }: { formattedClassName: string }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={`spinner ${formattedClassName}`} // Add the class "spinner"
    >
      <path
        d="M18,4.181v2.021c4.559,0.929,8,4.97,8,9.798c0,5.514-4.486,10-10,10S6,21.514,6,16c0-4.829,3.441-8.869,8-9.798V4.181
      C8.334,5.137,4,10.066,4,16c0,6.617,5.383,12,12,12s12-5.383,12-12C28,10.066,23.666,5.137,18,4.181z"
      />
    </svg>
  );
}

export default Spinner;
