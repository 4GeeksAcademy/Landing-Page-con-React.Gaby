import react from "react";

export const Jumbotron = () => {
  return (
    <div
      className="p-5 mb-4 rounded-3"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20230612/original/pngtree-graffiti-wall-wallpapers-hd-picture-image_3182745.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      <div className="container py-5">
        <h1 className="display-5 fw-bold">Arte callejero</h1>
        <p className="col-md-8 fs-4">
          Esta es una landing page construida con React y Bootstrap, usando componentes funcionales.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Aprende más
        </button>
      </div>
    </div>
  )
}

export default Jumbotron;