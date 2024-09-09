import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noah Baron',
  description: 'Blog of Noah Baron',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='pt-7 pb-3 min-h-screen flex flex-col justify-between'>
        {children}
      </body>
    </html>
  );
}
