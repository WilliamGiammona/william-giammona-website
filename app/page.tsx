import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mailbtn from "./components/Mailbtn";
import Scroll from "./components/Scroll";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <Nav />
        <Hero />
        <Mailbtn />
        <Scroll />
      </section>
      <section className="py-12">
        <Projects />
      </section>
      <section className="py-12 bg-black">
        <Footer />
      </section>
    </>
  );
}
