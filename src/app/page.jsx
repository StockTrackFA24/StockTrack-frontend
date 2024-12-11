import Link from 'next/link';

export const metadata = {
    title: 'StockTrack'
}

export default async function Home() {


  return (
    <main className="flex min-h0-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-green-800 p-6 md:h-52">
        <p className={'text-6xl text-black md:text-1x1 md:leading-normal'}>
          <strong>StockTrack</strong>

        </p>
      </div>
        <Link className="bg-green-700 rounded px-5 py-2 w-1/4" href="/login">
            Login
        </Link>
    </main>
  );
}
