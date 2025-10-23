import ContactInfo from '@/components/layout/ContactInfo';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Stack from '@/components/sections/Stack';

export default function Home() {
  return (
    <>
      <Header />
      <ContactInfo />
      <About />
      <Stack />
      <Experience />
      <Projects />
    </>
  );
}
