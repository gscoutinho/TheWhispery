import { headers } from "next/headers";
import Feed from "./Feed/page";
import Portfolio from "./Portfolio/page";
import About from "./about/page";

export default function Home() {
  return (
    <main className='mt-20 flex justify-center'>
      <div className='w-3/4'>
        <About />
        <Feed />
        <Portfolio />
      </div>
    </main>
  );
}
