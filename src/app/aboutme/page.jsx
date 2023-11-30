import React from "react";

const AboutMe = () => {
  return(
     <section className="flex items-center bg-prueba w-full py-20 h-full ">
    <div className="mx-2">
      <h2 className="my-10 max-w-screen-md text-7xl text-violetname">SOBRE MI</h2>
      <p className="my-10 max-w-screen-lg text-lg text-violetmorelow">Empecé mi trayectoria como programador a mediados de 2022, cuando, pensando en qué estudiar, me adentré en este maravilloso mundo. Luego, me inscribí en el Bootcamp SoyHenry, el cual me proporcionó todas las herramientas necesarias para convertirme en un desarrollador web. Pude poner a prueba mis habilidades mediante exámenes y proyectos individuales y grupales, lo que me permitió graduarme con éxito en julio de 2023.</p>
      <h3 className="my-10 text-2xl text-violetname">Actualmente, continúo ampliando mis conocimientos y estoy en busca de una oportunidad laboral que me permita contribuir al equipo.</h3>
      <p className="my-10 text-lg text-violetmorelow">Si quieres contactarme, escríbeme a: <a href="mailto:alexxwebb18@gmail.com" className="text-celestelastname">alexxwebb18@gmail.com</a> o en <a target="_blank" className="text-celestelastname" href="https://www.linkedin.com/in/alexander-emanuel-bris-313655266/">LinkedIn</a></p>
    </div>
    </section>
  );
};

export default AboutMe;

