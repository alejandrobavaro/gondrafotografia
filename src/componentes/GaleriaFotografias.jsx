import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../assets/scss/_03-Componentes/_GaleriaFotografias.scss";

const GaleriaFotografias = () => {
  const [fotografias, setFotografias] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/galeria.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la red");
        }
        return response.json();
      })
      .then((data) => setFotografias(data))
      .catch((error) => {
        console.error("Error loading fotografias:", error);
        setError("No se pudieron cargar las fotografías.");
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="galeria-grid-container">
      <h2 className="galeria-title">Galería de Fotografías</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="galeria-grid">
        {fotografias.map((fotografia) => (
          <div key={fotografia.id} className="galeria-card">
            <h3 className="galeria-fotografia-title">{fotografia.nombre}</h3>
            <img src={fotografia["imagen portada"]} alt={fotografia.nombre} className="galeria-fotografia-img" />
            <hr />
            <div className="comments-section">
              <ul>
                {Array.isArray(fotografia["nuestro servicio"]) && fotografia["nuestro servicio"].map((comment, index) => (
                  <li key={`${fotografia.id}-comment-${index}`}>{comment}</li>
                ))}
              </ul>
            </div>

            <Slider {...settings}>
              {Array.isArray(fotografia["imagenes"]) && fotografia["imagenes"].map((img, index) => (
                <div key={`${fotografia.id}-img-${index}`}>
                  <img src={img} alt={`${fotografia.nombre} - ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>

            <div className="galeria-info">
              <p>{fotografia.tipo} | {fotografia.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaleriaFotografias;
