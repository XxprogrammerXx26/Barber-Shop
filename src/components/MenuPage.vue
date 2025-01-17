<!-- <template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">BLADE HUB</a>


            <button class="navbar-toggler"

            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
            >

            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Pages</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>

                </ul>

            </div>
        </div>
    </nav>

</template> -->
















<template>
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">BLADE HUB</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Sobre Nosotros</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Nuestros Servicios</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Productos</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contactanos</a></li>
              
              <!-- <li class="nav-item"><a class="nav-link" href="#">Usuario</a></li> -->
              <!-- <li class="nav-item"><a class="nav-link" href="#">Carrito</a></li> -->


            <li class="nav-item">
            <a class="nav-link icon-btn " href="#">
            <i class="bi bi-person"></i> 
            </a>
            </li>

            <li class="nav-item">
            <a class="nav-link  icon-btn " href="#">
            <i class="bi bi-cart"></i> 
            </a>
            </li>

            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="hero bg-light text-center py-5">
        <div class="container">
          <h1 class="display-4 fw-bold">TU BARBERO PERSONAL</h1>
          <p class="lead text-white">
            Bienvenido a Blade Hub, donde el estilo y la elegancia se encuentran. Descubre nuestros servicios exclusivos.
          </p>
          <button class="btn btn-dark btn-lg mt-3">Reserva tu turno</button>
        </div>
      </section>
  



      <!-- Additional Sections -->
      <section class="services py-5" >
        <div class="container">
          <h2 class="text-center mb-4">Nuestros Servicios</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="/src/assets/corteCabello.jpg" class="card-img-top" alt="Corte de cabello">
                <div class="card-body">
                  <h5 class="card-title">Corte de Cabello</h5>
                  <p class="card-text">Estilos modernos y clásicos realizados por profesionales.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Arreglo de barba">
                <div class="card-body">
                  <h5 class="card-title">Arreglo de Barba</h5>
                  <p class="card-text">Déjate sorprender por la perfección de nuestros expertos.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-sm">
                <img src="https://via.placeholder.com/300" class="card-img-top" alt="Tratamientos capilares">
                <div class="card-body">
                  <h5 class="card-title">Tratamientos Capilares</h5>
                  <p class="card-text">Cuidado intensivo para un cabello saludable y brillante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      
      <footer class="bg-dark text-white text-center py-3">
        <p class="mb-0">&copy; 2025 Blade Hub. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "BarberPage",
  };
  </script>
  
  <style scoped>
  .hero {
    background-image: url("/src/assets/barberia.jpg");
    background-size: cover;
    background-position: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }















.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 38px;
  border-radius: 50%; 
  background-color: #6c757d; 
  color: white; 
  font-size: 1.3rem; 
  text-decoration: none; 
  transition: background-color 0.3s ease, transform 0.3s ease;
}



.icon-btn:hover {
  background-color: #007bff; 
  color: white; 
  transform: scale(1.1);
}


.nav-item {
  margin-left: 15px;
}


.icon-btn[title]:hover:after {
  content: attr(title);
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.3s ease;
}


  </style>
  










