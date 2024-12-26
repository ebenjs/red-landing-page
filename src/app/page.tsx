import Image from "next/image";
import Header from "./components/global/Header";
import TwoPaneSection from "./components/global/TwoPaneSection";
import Hero from "./components/home/Hero";

export default function Home() {

  const appMockupImage = (
    <div className="flex justify-center">
      <img src="/images/preview.jpg" alt="Red app mockup" className="h-1/2 border rounded-2xl shadow"/>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TwoPaneSection
        pane1={<Hero />}
        pane2={appMockupImage}
        paddingX="px-32 2xl:px-72"
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
