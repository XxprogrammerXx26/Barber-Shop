<template>




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
  
          <div class="collapse navbar-collapse text-center" id="navbarNav">
            <ul class="navbar-nav ms-auto">

              <!-- <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li> -->
              <!-- <li class="nav-item"><a class="nav-link" href="#">Sobre Nosotros</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Nuestros Servicios</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Productos</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contáctanos</a></li> -->

              
        
              <li class="nav-item">
                <a class="nav-link icon-btn" id="login">
                  <i class="bi bi-person"></i>
                </a>
              </li>
              <br>
              <li class="nav-item">
                <a class="nav-link icon-btn" href="#">
                  <i class="bi bi-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  









  <!-- <div>
    <h2>Registrarse</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="registerEmail">Correo Electrónico</label>
        <input
          type="email"
          v-model="email"
          id="registerEmail"
          placeholder="Ingresa tu correo"
          required
        />
      </div>

      <div>
        <label for="registerPassword">Contraseña</label>
        <input
          type="password"
          v-model="password"
          id="registerPassword"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <div>
        <label for="registerConfirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          v-model="confirmPassword"
          id="registerConfirmPassword"
          placeholder="Confirma tu contraseña"
          required
        />
      </div>

      <button type="submit">Registrarse</button>
    </form>

    <p>
      ¿Ya tienes una cuenta? 
      <router-link to="/login">Inicia sesión aquí</router-link>
    </p>


    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
  </div> -->







  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="text-center mb-4">Registrarse</h2>

          <form @submit.prevent="handleRegister">
            <!-- Correo Electrónico -->
            <div class="mb-3">
              <label for="registerEmail" class="form-label">Correo Electrónico</label>
              <input
                type="email"
                v-model="email"
                id="registerEmail"
                class="form-control"
                placeholder="Ingresa tu correo"
                required
              />
            </div>

            <!-- Contraseña -->
            <div class="mb-3">
              <label for="registerPassword" class="form-label">Contraseña</label>
              <input
                type="password"
                v-model="password"
                id="registerPassword"
                class="form-control"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            <!-- Confirmar Contraseña -->
            <div class="mb-3">
              <label for="registerConfirmPassword" class="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                v-model="confirmPassword"
                id="registerConfirmPassword"
                class="form-control"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>

            <!-- Botón de Registro -->
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </div>
          </form>

          <p class="text-center mt-3">
            ¿Ya tienes una cuenta? 
            <router-link to="/login" class="text-decoration-none">Inicia sesión aquí</router-link>
          </p>

          <!-- Alertas de error o éxito -->
          <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> {{ errorMessage }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          
          <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Éxito:</strong> {{ successMessage }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





</template>

<script>
import { auth } from '../firebase'; // Importa la configuración de Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Método para crear usuario

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async handleRegister() {
      // Validación básica de contraseñas
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }

      // Asegurarse de que los campos no estén vacíos
      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = 'Por favor, complete todos los campos';
        return;
      }

      try {
        // Crear una nueva cuenta con Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        
        // Si el registro es exitoso
        const user = userCredential.user;
        this.successMessage = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        
        // Redirigir al usuario a la página de login
        this.$router.push({ name: 'Login' });
      } catch (error) {
        // Manejo de errores
        this.errorMessage = error.message;
      }
    }
  }
};
</script>







<style scoped>

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








.card {
    border-radius: 8px;
    background-color: #f7f7f7;
  }

  .btn-primary {
    background-color: #2c3e50;
    border: none;
  }

  .btn-primary:hover {
    background-color: #34495e;
  }

  .form-label {
    font-weight: bold;
  }

  .text-center {
    font-size: 1.1rem;
  }

  .text-decoration-none {
    color: #2c3e50;
  }

  .text-decoration-none:hover {
    color: #34495e;
  }

  .alert-dismissible .btn-close {
    margin-top: -5px;
  }


</style>
