import { useState } from 'react';

function ChevronRightIcon() {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.91107 4.91009C7.23651 4.58466 7.76414 4.58466 8.08958 4.91009L13.0896 9.91009C13.415 10.2355 13.415 10.7632 13.0896 11.0886L8.08958 16.0886C7.76414 16.414 7.23651 16.414 6.91107 16.0886C6.58563 15.7632 6.58563 15.2355 6.91107 14.9101L11.3218 10.4993L6.91107 6.0886C6.58563 5.76317 6.58563 5.23553 6.91107 4.91009Z'
        fill='#FAFAF9'
      />
    </svg>
  );
}

function checkIfIsValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function EmailSubscription() {
  const [email, setEmail] = useState('');

  function handleSubmit() {
    console.log('submitting email', email);
  }

  const isValidEmail = checkIfIsValidEmail(email);

  return (
    <div className='block lg:flex lg:gap-2'>
      <input
        className='lg:w-80 lg:rounded-lg lg:h-[60px] lg:px-4 focus:outline-none rounded px-3 py-3 border border-gray-400 bg-gray-600 w-full'
        placeholder='example@acme.inc'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className=''>
        <button
          onClick={handleSubmit}
          className='mt-2 lg:hidden lg:mt-0 w-full text-center text-gray-50 bg-gray-800 border border-gray-400 bg-gray-500 rounded py-3'
        >
          Submit
        </button>
        <button
          onClick={handleSubmit}
          className={`items-center h-[60px] w-[60px] lg:flex justify-center hidden ${isValidEmail ? 'bg-gray-500' : 'bg-gray-600'} transition-colors border border-gray-400 rounded-lg`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
