import About from '@/components/About';
import AppHeader from '@/components/AppHeader';
import ContactInfo from '@/components/ContactInfo';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';

export default function Home() {
  return (
    <>
      <AppHeader />
      <main className="max-w-screen overflow-x-hidden px-2 pt-24">
        <div className="mx-auto md:max-w-3xl">
          <Header />
          <ContactInfo />
          <About />
          <Stack />
          <Experience />
          <Projects />
        </div>
      </main>
    </>
  );
}
