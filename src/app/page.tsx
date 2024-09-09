'use client';

function GitHubIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='fill-inherit'
    >
      <path
        d='M12.2144 1.71484C6.41311 1.71484 1.71436 6.41359 1.71436 12.2148C1.71436 16.8611 4.71998 20.7855 8.89373 22.1767C9.41873 22.2686 9.61561 21.9536 9.61561 21.678C9.61561 21.4286 9.60248 20.6017 9.60248 19.7223C6.96436 20.208 6.28186 19.0792 6.07186 18.4886C5.95373 18.1867 5.44186 17.2548 4.99561 17.0055C4.62811 16.8086 4.10311 16.323 4.98248 16.3098C5.80936 16.2967 6.39998 17.0711 6.59686 17.3861C7.54186 18.9742 9.05123 18.528 9.65498 18.2523C9.74686 17.5698 10.0225 17.1105 10.3244 16.848C7.98811 16.5855 5.54686 15.6798 5.54686 11.6636C5.54686 10.5217 5.95373 9.57672 6.62311 8.84172C6.51811 8.57922 6.15061 7.50297 6.72811 6.05922C6.72811 6.05922 7.60748 5.78359 9.61561 7.13547C10.4556 6.89922 11.3481 6.78109 12.2406 6.78109C13.1331 6.78109 14.0256 6.89922 14.8656 7.13547C16.8737 5.77047 17.7531 6.05922 17.7531 6.05922C18.3306 7.50297 17.9631 8.57922 17.8581 8.84172C18.5275 9.57672 18.9344 10.5086 18.9344 11.6636C18.9344 15.693 16.48 16.5855 14.1437 16.848C14.5244 17.1761 14.8525 17.8061 14.8525 18.7905C14.8525 20.1948 14.8394 21.3236 14.8394 21.678C14.8394 21.9536 15.0362 22.2817 15.5612 22.1767C17.6457 21.473 19.457 20.1334 20.7401 18.3463C22.0233 16.5593 22.7138 14.4149 22.7144 12.2148C22.7144 6.41359 18.0156 1.71484 12.2144 1.71484Z'
        fill='inherit'
      />
    </svg>
  );
}

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

function Card({
  url,
  githubURL,
  title,
  domain,
}: {
  url: string;
  githubURL: string;
  title: string;
  domain: string;
}) {
  return (
    <button
      onClick={() => {
        window.open(url, '_blank');
      }}
      className='bg-gray-100 text-left lg:gap-20 items-center flex lg:items-center gap-1 border border-gray-200 justify-between rounded-lg px-7 py-4 lg:h-26'
    >
      <div className='flex flex-col'>
        <h4 className='text-gray-950 lg:text-lg'>{title}</h4>
        <p className='text-gray-500 text-left'>{domain}</p>
      </div>
      <a
        onClick={(e) => e.stopPropagation()}
        href={githubURL}
        className='w-8 h-8 flex items-center justify-center self-end hover:fill-gray-900 fill-gray-500'
        target='_blank'
      >
        <GitHubIcon />
      </a>
    </button>
  );
}

export default function Home() {
  return (
    <>
      <div className='flex flex-col flex-1 pb-12'>
        <a className='px-7 font-medium text-2xl' href='/'>
          nbaron
        </a>
        <div className='flex flex-col justify-between flex-1'>
          <main className='flex flex-col gap-0 mx-7 md:mx-auto md:w-3/4'>
            <section className='mt-14'>
              <div className='flex flex-col gap-4 text-gray-900'>
                <h1 className='text-2xl text-gray-900 font-medium md:text-4xl'>
                  Hi, I{"'"}m Noah
                </h1>
                <div className='flex flex-col gap-3 text-lg'>
                  <p>I{"'"}m a software engineer and designer.</p>
                  <p>
                    I like to build things that are fun, useful, and make the
                    world a better place.
                  </p>
                </div>
                <p className='text-lg'>
                  Want to support me?{' '}
                  <a
                    className='underline'
                    target='_blank'
                    href='https://buymeacoffee.com/noahbaron'
                  >
                    Buy me a coffee
                  </a>
                </p>
              </div>
            </section>
            <section className='mt-8 flex-col flex gap-2'>
              <h3 className='text-lg text-gray-950 font-medium'>Projects</h3>
              <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                <Card
                  domain='visitarandomwebsite.com'
                  githubURL='https://github.com/noahbaron91/visitarandomwebsite'
                  title='A website that sends you to a random page on the internet'
                  url='https://visitarandomwebsite.com/'
                />
                <Card
                  domain='onlyvisitonce.com'
                  githubURL='https://github.com/noahbaron91/onlyvisitonce'
                  title='A website you can only visit once'
                  url='https://onlyvisitonce.com/'
                />
              </div>
            </section>
          </main>
        </div>
        <section className='mx-7 md:mx-auto md:w-3/4 my-6 lg:flex-row lg:justify-between bg-gray-900 lg:items-center border flex flex-col gap-4 px-7 py-7 border-gray-400 rounded-xl'>
          <div className='flex flex-col gap-1'>
            <h4 className='text-gray-50 font-medium text-lg'>
              Get notified when a new project launches
            </h4>
            <p className='text-gray-400'>No spam guaranteed</p>
          </div>
          <div className='relative'>
            <input
              className='lg:w-80 lg:rounded-lg lg:h-[60px] lg:px-4 focus:outline-none rounded px-3 py-3 border border-gray-400 bg-gray-50 w-full'
              placeholder='example@acme.inc'
            />
            <button className='lg:absolute mt-2 lg:mt-0 lg:top-1/2 lg:-translate-y-1/2 lg:flex w-full lg:items-center lg:justify-center lg:right-5 lg:w-7 lg:h-7 text-center text-gray-50 bg-gray-800 border border-gray-600 rounded-lg py-3'>
              <span className='lg:hidden'>Submit</span>
              <div className='lg:block hidden'>
                <ChevronRightIcon />
              </div>
            </button>
          </div>
        </section>
      </div>
      <footer className='flex items-center gap-3 px-7'>
        <a href='https://github.com/noahbaron91' target='_blank'>
          GitHub
        </a>
        <a href='https://x.com/noahthebaron' target='_blank'>
          Twitter
        </a>
      </footer>
    </>
  );
}
