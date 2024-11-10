import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h0-screen flex-col p-6">
      <div className="flex h-50 shrink-0 items-end rounded-lg bg-green-800 p-6 md:h-52">
        <p className={'text-6xl text-black md:text-1x1 md:leading-normal'}>
          <strong>StockTrack</strong>

        </p>
      </div>

    </main>
  );
}
