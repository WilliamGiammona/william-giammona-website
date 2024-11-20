import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mailbtn from "./components/Mailbtn";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <Nav />
        <Hero />
        <Mailbtn />
      </section>
    </>
  );
}
