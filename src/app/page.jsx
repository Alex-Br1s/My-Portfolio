
import Navbar from "./components/Navbar"
import Alexander from "./alex/page"
import AboutMe from "./aboutme/page"
import Projects from "./projects/page"
import Habilidades from "./skills/page"
import Contacto from "./contact/page"

export const metadata = {
  title: 'My-porfolio',
  description: 'My-porfolio web hecho con next.js',
  icons: {
    icon: [
      '/favicon.ico?v=4'
    ],
    apple: [
      '/apple-touch-icon.png'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

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
