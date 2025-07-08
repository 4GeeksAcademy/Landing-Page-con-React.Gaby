import React from "react";

import { Navbar } from "./Navbar.jsx";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (

		<>
			<Navbar title="Arte Callejero"/>
			<Jumbotron />

		<div className="container pt-5">
        <div className="row g-4">
          <Card
            nombre="Arte callejera."
            imagen="https://streetartcities.com/media/6/607835b8-7166-4aae-9965-3d98b11620e8/2048.jpg"
            descripcion ="El arte urbano engloba tanto al graffiti como diversas otras formas de expresión artística callejera con diferentes técnicas." 
          />
          <Card
            nombre="David Walker, live painting."
            imagen="https://3.bp.blogspot.com/-Pst37oa6xcQ/UnkoyY5NqyI/AAAAAAAAAVA/d8cX4yeJ5lk/s1600/arte+callejero.jpg"
            descripcion="Desde mediados de los años 90, el término street art se utiliza para describir nuevas formas de intervención urbana."
          />
          <Card
            nombre="Pintando en vivo."
            imagen="https://images.sj33.cn/uploads/allimg/201012/20101225222705305.jpg"
            descripcion="Sin la ayuda de plantillas o pinceles, armado solo con aerosoles de pintura y su propio talento, el artista de graffiti londinense David Walker crea intrincados y delicados retratos de niñas."
          />

		   <Card
            nombre="David Walker pintando con tecnica."
            imagen="https://blog.molotow.com/wp-content/uploads/2022/07/MR-CENZ_HANBURY-ST-2022_STREET-ART-ATLAS_DSC_4269.jpg"
            descripcion=" David Walker ya ha ganado fama en el mundo del street art gracias a su original estilo refinado.
			Hoy en día, las obras del artista se exhiben en galerías de todo el mundo."
          />

		   <Card
            nombre="Pintura Artística Con Aerosol"
            imagen="https://1.bp.blogspot.com/-Dv-pSuWjq34/XxROvTdglgI/AAAAAAAAL5U/KtIbhMC-LtAZLVbZSf4aOKdYNhFTy1BuQCLcBGAsYHQ/s1000-rw/Brick-Lane-Street-Art-London-MrCenz_07.jpg"
            descripcion="El spray es la técnica más utilizada, con una gran diversidad de estilos y búsquedas estéticas, una forma mas rapida y precisa para trabajar en los muros de las calles."
          />

		     <Card
            nombre="Otra manera de ver el arte."
            imagen="https://cdn-ak.f.st-hatena.com/images/fotolife/m/mangokyoto/20230612/20230612154631.jpg"
            descripcion="Lo más habitual es que nos encontremos esculturas o grafitis, 
			y que tanto unas como otras estén simplemente durante unas semanas, días u horas en las calles la nueva forma de ver el arte urbano."
          />

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;