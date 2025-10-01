import Header from "@/components/Header";
import ContactInfo from "@/components/ContactInfo";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
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
  );
}
