import React from 'react';

// Assets
import './style.css';

const Contact = (props) => {
  console.log(props);
  return (
    <div className="container Contact py-4 my-4">
        <section className="content-title">
            <h3>Contacto</h3>  
        </section>
        <section className="content-contact">
            <p>¿Que te ha parecido mi portafolio? <br></br>
              Estemos en contacto, igual me gustaria saber de ti
            </p>
            <div className=""></div>
          
        </section>
        
    </div>
  );
}

export default Contact;