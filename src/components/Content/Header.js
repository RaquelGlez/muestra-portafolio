import React from 'react';

// Assets
import foto from '../Images/raquel-glez.jpg';
import './style.css';

const Header = (props) => {
  console.log(props);
  return (
    <div className="Header">
        <section className="nombre">
          <img src={foto} height="200" alt="foto personal" className="rounded-circle"/>
          <h2 className="Nombre">Raquel González</h2>
        </section>
        <section>
          <p className="mt-2">Me gusta aprender cosas nuevas constantemente.
                              Busco aplicar la tecnología, mi experiencia y
                              vivencias para idear, crear o mejorar productos y
                              servicios que coadyuven a mejorar la calidad de
                              vida de las personas y el entorno</p>
        </section>
    </div>
  );
}

export default Header;