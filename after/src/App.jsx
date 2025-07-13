import DefaultLayout from './layouts/DefaultLayout';
import HeaderNav from './component/HeaderNav';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects'
import Certifications from './component/Certifications';
import Timeline from './component/Timeline';
import Contact from './component/Contact';
import BackToTopButton from './component/BackToTopButton';

function App() {
  return (
    <DefaultLayout>
      <header className="fixed top-0 left-[20px] right-[20px] z-10 border-b-[2px] border-[#444] pb-[10px]">
        <HeaderNav />
      </header>
      <About />
      {/* <Skills /> */}
      <Projects />
      {/* <Certifications /> */}
      {/* <Timeline />  */}
      <Contact />
      <footer className="text-center text-gray-400 py-10 border-t border-[#333] mt-20 text-sm">
        © 2025 Sangtaek Kang. All rights reserved.
      </footer>
      <BackToTopButton />
    </DefaultLayout>
  );
}

export default App;
