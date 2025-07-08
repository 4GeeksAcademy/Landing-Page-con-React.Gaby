import React, { useState } from "react";

export const Card = (props) => {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const toggleDescripcion = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={props.imagen} className="card-img-top" alt="arte" />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <button onClick={toggleDescripcion} className="btn btn-primary">
            Más información
          </button>
          {mostrarDescripcion && (
            <p className="card-text mt-3">{props.descripcion}</p>
          )}
        </div>
      </div>
    </div>
  );
};
       

    {/*<div className="col-md-4">
            <div className="card h-100">
                <img src="https://3.bp.blogspot.com/-Pst37oa6xcQ/UnkoyY5NqyI/AAAAAAAAAVA/d8cX4yeJ5lk/s1600/arte+callejero.jpg" className="card-img-top" alt="arte callejero" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">Desde mediados del los años 90 el término street art, de forma más específica, Post-Graffiti se utiliza para describir el trabajo.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card h-100">
                <img src="https://images.sj33.cn/uploads/allimg/201012/20101225222705305.jpg" className="card-img-top" alt="arte callejero" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">En spray, es la forma en donde se puede encontrar mayor diversidad de estilos y búsquedas estéticas por los artistas del movimiento. </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div> */}
      
          
