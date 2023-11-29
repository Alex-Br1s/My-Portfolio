'use client'
import Navbar from "./components/Navbar"
import Alexander from "./alex/page"
import AboutMe from "./aboutme/page"
import Projects from "./projects/page"
import Habilidades from "./skills/page"
import Contacto from "./contact/page"

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
        <Alexander />
        <AboutMe />
        <Projects />
        <Habilidades />
        <Contacto />
    </div>
  );
}
