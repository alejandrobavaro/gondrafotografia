import React, { useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [email, setEmail] = useState("");

  const images = [
    "./img/03-img-cuadradas/galeria-5.jpg",
    "./img/03-img-cuadradas/galeria-7.jpg",
    "./img/03-img-cuadradas/galeria-16.jpg",
    "./img/03-img-cuadradas/galeria-19.jpg",
    "./img/03-img-cuadradas/galeria-6.jpg",
    "./img/03-img-cuadradas/galeria-2.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const handleSubscribeClick = () => {
    setShowSubscriptionForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Suscripción enviada:", email);
    setShowSubscriptionForm(false);
    
    // Mostrar el mensaje de confirmación
    toast.success("¡Gracias! Te has suscrito a las novedades de nuestro arte y fotografía.");
  };

  return (
    <main className="mainContent">
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        className="my-toast-container" // Clase para aplicar estilos personalizados
      /> {/* Contenedor para mostrar las notificaciones de toast */}

      {/* Sección de Ofertas */}
      <section className="offersSection">
        <h2 className="sectionTitle">Obras Destacadas</h2>
        <div className="offersGrid">
          <div className="offerItem">
            <img src="./img/03-img-cuadradas/almangoproduccionesfotografia1.jpg" alt="Naturaleza en Colores" className="offerImage" />
            <h3 className="offerTitle">Naturaleza en Colores</h3>
            <p className="offerDescription">
              Descubre una colección vibrante que captura la esencia de la naturaleza.
            </p>
          </div>
          <div className="offerItem">
            <img src="./img/03-img-cuadradas/almangoproduccionesfotografia2.jpg" alt="Retratos Únicos" className="offerImage" />
            <h3 className="offerTitle">Retratos Únicos</h3>
            <p className="offerDescription">
              Retratos que cuentan historias y capturan momentos inolvidables. ¡Explora ahora!
            </p>
          </div>
        </div>
      </section>
      
      <hr />
      
      {/* Sección de Banners */}
      <section className="bannerSection">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carouselItem">
              <img src={image} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Sección de Nuevos Productos */}
      <section className="newArrivalsSection">
        <h2 className="sectionTitle">Nuevas Creaciones</h2>
        <div className="productsGrid">
          <div className="productItem">
            <img src="./img/03-img-cuadradas/galeria-18.jpg" alt="Esculturas Modernas" className="productImage" />
            <h3 className="productTitle">Esculturas Modernas</h3>
            <p className="productDescription">Arte en tres dimensiones que transforma espacios.</p>
          </div>
          <div className="productItem">
            <img src="./img/03-img-cuadradas/galeria-11.jpg" alt="Fotografías de Paisajes" className="productImage" />
            <h3 className="productTitle">Fotografías de Paisajes</h3>
            <p className="productDescription">Imágenes que evocan la belleza del mundo natural.</p>
          </div>
          <div className="productItem">
            <img src="./img/03-img-cuadradas/galeria-4.jpg" alt="Arte Abstracto" className="productImage" />
            <h3 className="productTitle">Arte Abstracto</h3>
            <p className="productDescription">Composiciones únicas que invitan a la reflexión.</p>
          </div>
        </div>
      </section>

      {/* Sección de Suscripción */}
      <section className="subscriptionSection">
        <img 
          src="./img/09-gif/Tuwp.gif" 
          alt="Galería de Arte" 
          className="productImage" 
        />
        <hr />
        <button className="subscribeButton" onClick={handleSubscribeClick}>Suscribirse a Novedades</button>
      </section>

      {/* Formulario de Suscripción */}
      {showSubscriptionForm && (
        <div className="subscriptionFormOverlay">
          <form onSubmit={handleFormSubmit} className="subscriptionForm">
            <h2>Suscríbete a Nuestras Noticias de Arte</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit" className="submitButton">Enviar</button>
            <button type="button" onClick={() => setShowSubscriptionForm(false)} className="closeButton">Cerrar</button>
          </form>
        </div>
      )}
    </main>
  );
}

export default MainContent;
