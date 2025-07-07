
export const Card = (props) => {
return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card h-100">
                        <img src="https://streetartcities.com/media/6/607835b8-7166-4aae-9965-3d98b11620e8/2048.jpg" className="card-img-top" alt="arte" />
                        <div className="card-body">
                            <h5 className="cards-title">{props.nombre}</h5>
                            <p className="card-text"> El arte urbano engloba tanto al graffiti como diversas otras formas de expresión artística callejera con diferentes tecnicas.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <img src="https://3.bp.blogspot.com/-Pst37oa6xcQ/UnkoyY5NqyI/AAAAAAAAAVA/d8cX4yeJ5lk/s1600/arte+callejero.jpg" className="card-img-top" alt="arte callejero" />
                        <div className="card-body">
                            <h5 className="cards-title">{props.nombre}</h5>
                            <p className="card-text">Desde mediados del los años 90 el término street art, de forma más específica, Post-Graffiti se utiliza para describir el trabajo.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100">
                        <img src="https://images.sj33.cn/uploads/allimg/201012/20101225222705305.jpg" className="card-img-top" alt="arte callejero" />
                        <div className="card-body">
                            <h5 className="cards-title">{props.nombre}</h5>
                            <p className="card-text">En spray, es la forma en donde se puede encontrar mayor diversidad de estilos y búsquedas estéticas por los artistas del movimiento. </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}