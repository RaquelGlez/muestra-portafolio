import React from 'react';
import About from './Aboutme';
import Work from './Work';
import Skills from './Skills'
import Contact from './Contact';

// Assets
import './style.css';

const Content = (props) => {
  console.log(props);
  return (

    <div className="row">
      <div className="col-3">

      </div>
      <div className="col-9">
        <div className="about mt-5"><About /></div>
        <div className="work"><Work /></div>
        <div className="skills"><Skills /></div>
        <div className="contact mb-5"><Contact /></div>
      </div>
    </div>




      // <div className="row container-fluid Contenido">
      //   <div className="col-3 Menu">
      //     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //       <a className="nav-link active mb-2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Sobre mí</a>
      //       <a className="nav-link mb-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Habilidades</a>
      //       <a className="nav-link mb-2" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Proyectos</a>
      //       <a className="nav-link mb-2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Contacto</a>
      //     </div>
      //   </div>
      //   <div className="col-9">
      //     <div className="tab-content container" id="v-pills-tabContent">
      //       <div className="tab-pane fade show active mt-4" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Header /></div>
      //       <div className="tab-pane fade" id="v-pills-profile mt-4" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
      //       <div className="tab-pane fade" id="v-pills-messages mt-4" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
      //       <div className="tab-pane fade" id="v-pills-settings mt-4" role="tabpanel" aria-labelledby="v-pills-settings-tab"><Footer /></div>
      //     </div>
      //   </div>
      // </div>



    // <div className="Navbar">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <a className="navbar-brand" href="#page-top">
    //         <img src={logo} height="30" className="d-inline-block align-top" alt="web-icon"/>RG
    //         </a>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //             <div className="navbar-nav mr-auto">
    //                 <a className="nav-item nav-link active" href="#home">Inicio</a>
    //                 <a className="nav-item nav-link" href="#">Sobre mí</a>
    //                 <a className="nav-item nav-link" href="#">Proyectos</a>
    //                 <a className="nav-item nav-link" href="#">Habilidades</a>
    //                 <a className="nav-item nav-link" href="#">Contacto</a>
                    
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  );
}

export default Content;