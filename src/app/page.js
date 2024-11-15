import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Mars Visit Application!</h1>
      <p>Apply now to be one of the first visitors to Mars!</p>
      <Link href="/application/personal">
        <button>Start Application</button>
      </Link>
    </main>
  );
}
