import React from 'react';

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={'icon icon-plusicon ' + (props.className || '')}
    {...props}
  >
    {/* Example SVG Path for PlusIcon */}
    <circle cx='12' cy='12' r='10' />
    <path d='M12 8v8M8 12h8' />
  </svg>
);
