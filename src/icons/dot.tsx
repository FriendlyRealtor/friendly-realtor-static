import React from 'react';

function Dot({ formattedClassName }: { formattedClassName: string }) {
  return (
    <svg className={formattedClassName} data-prefix="fas" data-icon="circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
    </svg>
  );
}

export default Dot;
