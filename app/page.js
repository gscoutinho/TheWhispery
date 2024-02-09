import Feed from "./Feed/page";
import Portfolio from "./Portfolio/page";
import About from "./about/page";
import Resume from "./resume";

import data_page from '../public/infos/data_page.json' assert {type: 'json'}
import SectionDivider from "./components/SectionDivider";

export default function Home() {

  const data_info = data_page.data_page

  console.log(data_info.resume)

  return (
    <main className='mt-20 flex justify-center'>
      <div className='w-3/4'>
        <Resume props={data_info.resume}/>
        <SectionDivider />
        <Feed />
        <Portfolio />
        <About />
      </div>
    </main>
  );
}
