import Posts from './components/Posts';

//86400 is one day
export const revalidate = 10;

export default function Home() {
  return (
    <main className='px-6 mx-auto black'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Mississippi</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
