<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="bi bi-scissors"></i> BARBER
        </a>

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
        <div class="collapse navbar-collapse   text-center   " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="#sobrenosotros">Sobre Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="#servicios">Nuestros Servicios</a></li>
            <li class="nav-item"><a class="nav-link" href="#productos">Productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#contactanos">Contactanos</a></li>


          <li class="nav-item" v-if="!user">
            <a class="nav-link" href="/login">
              <i class="bi bi-person"></i> Iniciar Sesión
            </a>
          </li>

        
          <!-- <li class="nav-item" v-if="user">
            <a class="nav-link" href="/profile">
              <i class="bi bi-person-circle"></i> {{ user.email }}
            </a>
          </li> -->

      




         
          <li class="nav-item" v-if="user">
            <a class="nav-link " @click="handleSignOut">
              
              <i class="bi bi-person"></i>Cerrar Sesion
            </a>
          </li>


          <li class="nav-item" v-if="user">
          <a class="nav-link icon-btn" href="/Usuario">
          <i class="bi bi-person"></i> {{ user.name || '' }}
         </a>
         </li>
          
          <li class="nav-item">
              <a class="nav-link  icon-btn " href="/carrito">
                <i class="bi bi-cart"></i> 
              </a>
            </li> 
       


          



          </ul>
        </div>
      </div>
    </nav>

    <section class="hero bg-light text-center py-5" >
      <div class="container">
        <h1 class="display-4 fw-bold">TU BARBERO PERSONAL</h1>
        <p class="lead text-white">
          Bienvenido a BARBER, donde el estilo y la elegancia se encuentran. Descubre nuestros servicios exclusivos.
        </p>


      <router-link to="/ReservaTurno">
        <button class="btn btn-dark btn-lg mt-3">Reserva tu turno</button>
      </router-link>


      </div>
    </section>

    <section class="services py-5" id="servicios">
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
              <img src="/src/assets/Arreglo-de-Barba-scaled.jpg" class="card-img-top" alt="Arreglo de barba">
              <div class="card-body">
                <h5 class="card-title">Arreglo de Barba</h5>
                <p class="card-text">Déjate sorprender por la perfección de nuestros expertos.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow-sm">
              <img src="/src/assets/capilar.webp" class="card-img-top" alt="Tratamientos capilares">
              <div class="card-body">
                <h5 class="card-title">Tratamientos Capilares</h5>
                <p class="card-text">Cuidado intensivo para un cabello saludable y brillante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section class="about-us bg-light py-5" id="sobrenosotros">
      <div class="container">
        <h2 class="text-center mb-4">Sobre Nosotros</h2>
        <div class="row">
          <div class="col-md-6">
            <p class="lead">
              En BARBER, somos un equipo de barberos apasionados por el estilo, la calidad y la atención personalizada. Nos especializamos en ofrecer servicios de corte de cabello, arreglo de barba y tratamientos capilares de la más alta calidad. Nuestro objetivo es brindarte una experiencia única, asegurándonos de que te sientas cómodo, relajado y bien cuidado en cada visita.
            </p>
            <p>
              Con años de experiencia en el sector, nuestros profesionales se mantienen al tanto de las últimas tendencias y técnicas para ofrecerte los mejores resultados. En BARBER, cada cliente es una prioridad, y nos aseguramos de que cada servicio esté diseñado para satisfacer tus necesidades de belleza y bienestar.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/src/assets/CorteBarba.jpg" alt="Nuestro equipo" class="img-fluid rounded shadow-sm">
          </div>
        </div>
      </div>
    </section>

    








   
       
    <section class="products py-5" id="productos">
  <div class="container">
    <h2 class="text-center mb-4">Nuestros Productos</h2>
    <div class="row">
     
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/th.jpg" class="card-img-top" alt="Producto 1">
          <div class="card-body">
            <h5 class="card-title">Cera para Cabello</h5>
            <p class="card-text">Producto ideal para mantener tu estilo todo el día. Alta fijación y acabado natural.</p>
            <a href="/productos" class="btn btn-dark btn-lg">Ver Productos</a>
          </div>
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/beard.jpg" class="card-img-top" alt="Producto 2">
          <div class="card-body">
            <h5 class="card-title">Aceite para Barba</h5>
            <p class="card-text">Aceite nutritivo para la barba, ideal para mantenerla suave, hidratada y saludable.</p>
            <a href="/productos" class="btn btn-dark btn-lg">Ver Productos</a>
          </div>
        </div>
      </div>
   
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="/src/assets/voluminizing.jpg" class="card-img-top" alt="Producto 3">
          <div class="card-body">
            <h5 class="card-title">Champú Voluminizador</h5>
            <p class="card-text">Champú especialmente formulado para dar volumen y cuerpo al cabello fino.</p>
            <a href="/productos" class="btn btn-dark btn-lg">Ver Productos</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

























  <section class="contact py-5" id="contactanos">
  <div class="container">
    <h2 class="text-center mb-4">Contáctanos</h2>
    <div class="row">
      <div class="col-md-6">
        <h4>Visítanos</h4>
        <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
        <p>Horario: Lunes a Viernes - 9:00 AM a 7:00 PM</p>
        <p>Sábado - 9:00 AM a 3:00 PM</p>
      </div>
      <div class="col-md-6">
        <h4>Envíanos un mensaje</h4>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="Tu nombre" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="Tu correo" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Tu mensaje" required></textarea>
          </div>
          <button type="submit" class="btn btn-dark">Enviar Mensaje</button>
        </form>
      </div>
    </div>
    
    <!-- Aquí se agrega el mapa -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.369191197893!2d-122.08424968469412!3d37.42199977982544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb8d7dfd07377%3A0xa7db07336d87723e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1602644821603!5m2!1sen!2sus" 
            width="100%" 
            height="400" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</section>






<footer class="bg-dark text-white text-center py-3">
      <p class="mb-0">&copy; 2025 BARBER. Todos los derechos reservados.</p>
    </footer>
  </div>


</template>








<script >

import { auth } from '../firebase'; // Importa la configuración de Firebase
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Importa métodos de Firebase

export default {
  data() {
    return {
      user: null, // Almacena los datos del usuario autenticado
    };
  },
  created() {
    // Verifica el estado de autenticación cuando se monta el componente
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user; // Si el usuario está autenticado, guarda los datos
      } else {
        this.user = null; // Si no hay usuario autenticado, limpia el estado
      }
    });
  },
  methods: {
    async handleSignOut() {
      try {
        await signOut(auth); // Cierra la sesión
        this.user = null; // Limpia los datos del usuario
        this.$router.push('/login'); // Redirige a la página de inicio de sesión
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    }
  }
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



/* Sección Sobre Nosotros */
.about-us {
  background-color: #f8f9fa;
}

.about-us h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.about-us .lead {
  font-size: 1.2rem;
  color: #555;
}

.about-us img {
  max-height: 100%;
  object-fit: cover;
}






















/* Estilos para los productos y el formulario */
.products .card-body .btn {
  width: 48%;
  font-size: 0.9rem;
}

.products .btn-success {
  background-color: #28a745;
  border: none;
}

.products .btn-success:hover {
  background-color: #218838;
}

.products .btn-dark {
  background-color: #007bff;
  border: none;
}

.products .btn-dark:hover {
  background-color: #0056b3;
}

form input, form textarea {
  width: 100%;
  margin-bottom: 15px;
}

form button {
  width: 100%;
}










/* Estilos adicionales para los productos */
.products .card {
  border: none;
  transition: transform 0.3s ease-in-out;
}

.products .card:hover {
  transform: translateY(-10px);
}

.products .card-img-top {
  height: 200px;
  object-fit: cover;
}

.products .card-body {
  padding: 1.5rem;
}

.products .btn-dark {
  width: 100%;
  font-size: 1.1rem;
  padding: 10px 0;
}

.products .btn-dark:hover {
  background-color: #0056b3;
}

.products h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
}










.card-img-top {
    width: 100%;
    height: 200px; 
    object-fit: cover; /* Asegura que la imagen cubra el área sin distorsionarse */
  }



  /* Asegura que todas las tarjetas tengan la misma altura */
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* Asegura que el contenido dentro de la tarjeta ocupe el espacio restante */
  .card-body {
    flex-grow: 1;
  }





</style>
