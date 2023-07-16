import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Marketing Boost</h1>
      <Link href="/admin">Login</Link>
    </main>
  )
}
