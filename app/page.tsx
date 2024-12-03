import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Scroll from "./components/Scroll";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-background relative">
        <Nav />
        <Hero />
        <Modal />
        <Scroll />
      </section>
      <section className="py-12 mb-24 bg-background">
        <Projects />
      </section>
      <section className="py-24 bg-background dark:bg-black">
        <Footer />
      </section>
    </>
  );
}
