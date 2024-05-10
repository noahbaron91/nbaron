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
      <p className='text-center'>Simplifying machine learning</p>
    </main>
  );
}
