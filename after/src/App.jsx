import DefaultLayout from './layouts/DefaultLayout';
import HeaderNav from './component/HeaderNav';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects'
import Certifications from './component/Certifications';
import Timeline from './component/Timeline';
import Contact from './component/Contact';

function App() {
  return (
    <DefaultLayout>
      <header className="fixed top-0 left-[20px] right-[20px] z-10 border-b-[2px] border-[#444] pb-[10px] mb-[30px]">
        <h1 className="text-[2.4rem] font-bold text-black">강상택</h1>
        <HeaderNav />
      </header>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Timeline /> 
      <Contact />
    </DefaultLayout>
  );
}

export default App;
