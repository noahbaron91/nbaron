type Props = {
  url: string;
  githubURL: string | null;
  title: string;
  domain: string;
};

export function Card({ url, githubURL, title, domain }: Props) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className='bg-gray-600 transition-colors text-left lg:gap-20 items-center flex lg:items-center gap-1 border border-gray-500 justify-between rounded-lg max-[375px]:px-5 px-7 py-4 lg:h-26'
    >
      <div className='flex flex-col'>
        <h4 className='text-gray-100 lg:text-lg'>{title}</h4>
        <p className='text-gray-300 text-left'>{domain}</p>
      </div>
      {githubURL && (
        <a
          onClick={(e) => e.stopPropagation()}
          href={githubURL}
          className='w-8 h-8 flex items-center justify-center self-end max-[350px]:hidden hover:fill-gray-400 fill-gray-300'
          target='_blank'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='inherit'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-inherit'
          >
            <path
              d='M12.2144 1.71484C6.41311 1.71484 1.71436 6.41359 1.71436 12.2148C1.71436 16.8611 4.71998 20.7855 8.89373 22.1767C9.41873 22.2686 9.61561 21.9536 9.61561 21.678C9.61561 21.4286 9.60248 20.6017 9.60248 19.7223C6.96436 20.208 6.28186 19.0792 6.07186 18.4886C5.95373 18.1867 5.44186 17.2548 4.99561 17.0055C4.62811 16.8086 4.10311 16.323 4.98248 16.3098C5.80936 16.2967 6.39998 17.0711 6.59686 17.3861C7.54186 18.9742 9.05123 18.528 9.65498 18.2523C9.74686 17.5698 10.0225 17.1105 10.3244 16.848C7.98811 16.5855 5.54686 15.6798 5.54686 11.6636C5.54686 10.5217 5.95373 9.57672 6.62311 8.84172C6.51811 8.57922 6.15061 7.50297 6.72811 6.05922C6.72811 6.05922 7.60748 5.78359 9.61561 7.13547C10.4556 6.89922 11.3481 6.78109 12.2406 6.78109C13.1331 6.78109 14.0256 6.89922 14.8656 7.13547C16.8737 5.77047 17.7531 6.05922 17.7531 6.05922C18.3306 7.50297 17.9631 8.57922 17.8581 8.84172C18.5275 9.57672 18.9344 10.5086 18.9344 11.6636C18.9344 15.693 16.48 16.5855 14.1437 16.848C14.5244 17.1761 14.8525 17.8061 14.8525 18.7905C14.8525 20.1948 14.8394 21.3236 14.8394 21.678C14.8394 21.9536 15.0362 22.2817 15.5612 22.1767C17.6457 21.473 19.457 20.1334 20.7401 18.3463C22.0233 16.5593 22.7138 14.4149 22.7144 12.2148C22.7144 6.41359 18.0156 1.71484 12.2144 1.71484Z'
              fill='inherit'
            ></path>
          </svg>
        </a>
      )}
    </button>
  );
}
