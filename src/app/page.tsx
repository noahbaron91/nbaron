function Header() {
  return (
    <div className='px-8 py-4'>
      <h1 className='font-medium text-xl'>nbaron</h1>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <p className='text-center'>
        making the internet fun again.{' '}
        <a href='/cofounder' className='text-[#0000FF]'>
          looking for cofounders
        </a>
      </p>
    </main>
  );
}
