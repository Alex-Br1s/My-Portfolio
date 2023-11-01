'use client'
import { BiMenu } from 'react-icons/bi';
import {AiFillCloseSquare} from 'react-icons/ai'
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FotoPerfil from "../../../image/FotoDePerfil3.png"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerHeight: undefined,
    innerWidth: undefined,
  });

  const detectSize = () => {
    setWindowDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      detectSize();
      window.addEventListener('resize', detectSize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', detectSize);
      }
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.addEventListener('click', closeMenu);
      return () => {
        document.body.removeEventListener('click', closeMenu);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      {windowDimension.innerWidth > 580 ? (
        <section className='w-48 flex flex-col items-center m-0 p-0 h-screen bg-violetlow justify-center fixed'>
          <div className='flex'>
            <div className='flex text-sm font-semibold flex-col items-center px-6'>
           
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/'>
                HOME
              </Link>
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/alex'>
                ALEX
              </Link>
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/aboutme'>
                SOBRE MI
              </Link>
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/projects'>
                PROYECTOS
              </Link>
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/skills'>
                HABILIDADES
              </Link>
              <Link className='my-1 text-violetmorelow hover:text-violetname' href='/contact'>
                CONTACTO
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div>
          {isMenuOpen ? (
            <div className='absolute z-10 h-screen w-screen bg-slate-600'>
              <div className='flex justify-center flex-col items-center mt-44'>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/'>
                HOME
              </Link>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/alex'>
                ALEX
              </Link>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/aboutme'>
                SOBRE MI
              </Link>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/projects'>
                PROYECTOS
              </Link>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/skills'>
                HABILIDADES
              </Link>
              <Link onClick={closeMenu} className='my-1 text-violetmorelow' href='/contact'>
                CONTACTO
              </Link>
              <AiFillCloseSquare className='text-2xl cursor-pointer text-violetname' onClick={closeMenu} /> {/* Agregar el ícono para cerrar el menú */}
            </div>
            </div>
          ) : (
            <BiMenu className='absolute text-2xl mt-1 ml-2 cursor-pointer text-violetname' onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
