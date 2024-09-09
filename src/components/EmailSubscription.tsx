import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function ChevronRightIcon() {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.29289 5.79289C8.68342 5.40237 9.31658 5.40237 9.70711 5.79289L15.7071 11.7929C16.0976 12.1834 16.0976 12.8166 15.7071 13.2071L9.70711 19.2071C9.31658 19.5976 8.68342 19.5976 8.29289 19.2071C7.90237 18.8166 7.90237 18.1834 8.29289 17.7929L13.5858 12.5L8.29289 7.20711C7.90237 6.81658 7.90237 6.18342 8.29289 5.79289Z'
        fill='#FAFAF9'
      />
    </svg>
  );
}

function CheckMarkIcon() {
  return (
    <motion.svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.7071 5.79289C21.0976 6.18342 21.0976 6.81658 20.7071 7.20711L9.70711 18.2071C9.31658 18.5976 8.68342 18.5976 8.29289 18.2071L3.29289 13.2071C2.90237 12.8166 2.90237 12.1834 3.29289 11.7929C3.68342 11.4024 4.31658 11.4024 4.70711 11.7929L9 16.0858L19.2929 5.79289C19.6834 5.40237 20.3166 5.40237 20.7071 5.79289Z'
        fill='#4ADE80'
      />
    </motion.svg>
  );
}

function CloseIcon() {
  return (
    <motion.svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z'
        fill='#F87171'
      />
    </motion.svg>
  );
}

function checkIfIsValidEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function Spinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='animate-spin w-5 h-5 border-2 border-solid border-white border-b-transparent rounded-[50%]'
    ></motion.div>
  );
}

type State = 'idle' | 'fetching' | 'success' | 'error';

function IconState({ state }: { state: State }) {
  switch (state) {
    case 'fetching': {
      return <Spinner />;
    }
    case 'error': {
      return <CloseIcon />;
    }
    case 'idle': {
      return <ChevronRightIcon />;
    }
    case 'success': {
      return <CheckMarkIcon />;
    }
  }
}

function TextState({ state }: { state: State }) {
  switch (state) {
    case 'idle': {
      return <span>Submit</span>;
    }
    case 'error': {
      return (
        <motion.span
          className='text-[#F87171]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Something went wrong
        </motion.span>
      );
    }
    case 'fetching': {
      return (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='animate-pulse'
        >
          Submitting...
        </motion.span>
      );
    }
    case 'success': {
      return (
        <motion.span
          className='text-[#4ADE80]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Success
        </motion.span>
      );
    }
  }
}

export function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [fetchingState, setFetchingState] = useState<
    'idle' | 'fetching' | 'success' | 'error'
  >('idle');

  async function handleSubmit() {
    setFetchingState('fetching');

    try {
      const response = await fetch('/api/email', {
        body: JSON.stringify({ email }),
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      setFetchingState('success');

      setTimeout(() => {
        setFetchingState('idle');
        setEmail('');
      }, 2500);
    } catch (error) {
      setFetchingState('error');

      setTimeout(() => {
        setFetchingState('idle');
      }, 2500);
    }
  }

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEmail(event.target.value);

    if (fetchingState === 'error') {
      setFetchingState('idle');
    }
  };

  const isValidEmail = checkIfIsValidEmail(email);

  return (
    <div className='block lg:flex lg:gap-2'>
      <input
        className='lg:w-80 lg:rounded-lg lg:h-[60px] lg:px-4 focus:outline-none rounded px-3 py-3 border border-gray-400 bg-gray-600 w-full'
        placeholder='example@acme.inc'
        onChange={handleEmailChange}
        value={email}
        name='email'
      />
      <div className=''>
        <button
          onClick={handleSubmit}
          className='mt-2 lg:hidden lg:mt-0 w-full text-center text-gray-50 bg-gray-800 border border-gray-400 bg-gray-500 rounded py-3'
        >
          <TextState state={fetchingState} />
        </button>
        <button
          onClick={handleSubmit}
          className={`items-center h-[60px] w-[60px] lg:flex justify-center hidden ${isValidEmail ? 'bg-gray-500' : 'bg-gray-600'} transition-colors border border-gray-400 rounded-lg`}
        >
          <IconState state={fetchingState} />
        </button>
      </div>
    </div>
  );
}
