'use client'
import './globals.css'
import { Kanit } from 'next/font/google'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'

const kanit = Kanit({
  weight: ['300', '400', '500', '700'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})


export default function RootLayout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0); // Inicializa con un valor predeterminado

  useEffect(() => {
    // Verifica si window está definido (solo se ejecutará en el navegador)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', updateWindowWidth);
      return () => {
        window.removeEventListener('resize', updateWindowWidth);
      };
    }
  }, []);

  return (
    <html lang="en">
      <body className={`flex m-0 p-0 bg-violethard ${kanit.className}`}>
        <section className={`lg:w-48  ${windowWidth >= 580 ? 'w-48' : ''}`}>
          <Navbar windowWidth={windowWidth} />
        </section>
        <section className='flex-1'>{children}</section>
      </body>
    </html>
  );
}