import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic';

export const metadata = {
  title: "Mississippi's Blog",
  description: 'Created by Mississippi Brennan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
