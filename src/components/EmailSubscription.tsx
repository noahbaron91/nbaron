import { useState } from 'react';

function ChevronRightIcon() {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C12.0732 8.76256 12.0732 9.23744 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z'
        fill='white'
      />
    </svg>
  );
}

export function EmailSubscription() {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    console.log('submitting email', email);
  }

  return (
    <div className='relative'>
      <input
        className='lg:w-80 lg:rounded-lg lg:h-[60px] lg:px-4 focus:outline-none rounded px-3 py-3 border border-gray-400 bg-gray-600 w-full'
        placeholder='example@acme.inc'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button
        onClick={handleSubmit}
        className='lg:absolute mt-2 lg:mt-0 lg:top-1/2 lg:-translate-y-1/2 lg:flex w-full lg:items-center lg:justify-center lg:right-5 lg:w-7 lg:h-7 text-center text-gray-50 bg-gray-800 border border-gray-400 bg-gray-500 rounded py-3'
      >
        <span className='lg:hidden'>Submit</span>
        <div className='lg:block hidden'>
          <ChevronRightIcon />
        </div>
      </button>
    </div>
  );
}
