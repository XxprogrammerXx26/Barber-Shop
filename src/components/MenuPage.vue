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
            <li class="nav-item"><a class="nav-link" href="#contactanos">Contactanos</a></li>


          <li class="nav-item" v-if="!user">
            <a class="nav-link" href="/login">
              <i class="bi bi-person"></i> Iniciar Sesión
            </a>
          </li>

      
         
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
          <br>
        
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


  <section class="contact py-5" id="contactanos">
  <div class="container">
    <h2 class="text-center mb-4">Contáctanos</h2>
    <div class="row">
      <div class="col-md-6">
        <h4>Visítanos</h4>
        <p>Dirección: Calle Ficticia 123, Ciudad, País</p>
        <p>Horario: Lunes a Sabado - 9:00 AM a 7:00 PM</p>
        <p>Domingo: Cerrado</p>
      </div>
      <div class="col-md-6">
        <h4>Envíanos un mensaje</h4>




  <form @submit.prevent="sendEmail">
  <div class="mb-3">
    <label for="name" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Tu nombre" required>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Correo Electrónico</label>
    <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Tu correo" required>
  </div>
  <div class="mb-3">
    <label for="subject" class="form-label">Asunto</label>
    <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Asunto" required>
  </div>
  <div class="mb-3">
    <label for="message" class="form-label">Mensaje</label>
    <textarea class="form-control" id="message" v-model="form.message" rows="4" placeholder="Tu mensaje" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-dark">Enviar Mensaje</button>
</form>



          </div>
        </div>
      




    
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
import Swal from 'sweetalert2';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import emailjs from 'emailjs-com';


export default {
  data() {
    return {
      user: null, 
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user; 
      } else {
        this.user = null; 
      }
    });
  },
  methods: {
    async handleSignOut() {
      try {
        await signOut(auth); 
        this.user = null; 
        this.$router.push('/login'); 
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    },
  

  sendEmail() {
  const service_id = 'service_xekb07f';
  const template_id = 'template_hyvida4';
  const user_id = 'MvDBmaPECYUuflKdn'; 

//   emailjs.send(service_id, template_id, this.form, user_id)
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Mensaje enviado con éxito!');
//       this.form.name = '';
//       this.form.email = '';
//       this.form.subject = '';
//       this.form.message = '';
//     })
//     .catch((error) => {
//       console.error('FAILED...', error);
//       alert('Error al enviar el mensaje.');
//     });
// }

//   }
// };








emailjs.send(service_id, template_id, this.form, user_id)
        .then((response) => {
          
          Swal.fire({
            icon: 'success',
            title: 'Mensaje Enviado',
            text: '¡Tu mensaje ha sido enviado con éxito!',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28a745' 
          });
          this.form.name = '';
          this.form.email = '';
          this.form.subject = '';
          this.form.message = '';
        })
        .catch((error) => {
      
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#dc3545' 
          });
          console.error('FAILED...', error);
        });
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
    object-fit: cover; 
  }



  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

 
  .card-body {
    flex-grow: 1;
  }

</style>
