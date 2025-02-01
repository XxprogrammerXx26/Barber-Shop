<!-- <template>

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
  



  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="text-center mb-4">Registrarse</h2>

          <form @submit.prevent="handleRegister">
         
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

          
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </div>
          </form>

          <p class="text-center mt-3">
            ¿Ya tienes una cuenta? 
            <router-link to="/login" class="text-decoration-none">Inicia sesión aquí</router-link>
          </p>


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
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
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
   
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }

      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = 'Por favor, complete todos los campos';
        return;
      }

      try {
     
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
    
        const user = userCredential.user;
        this.successMessage = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        
     
        this.$router.push({ name: 'Login' });
      } catch (error) {
      
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


</style> -->





















































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

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card shadow-lg">
          <div class="card-body">
            <h2 class="text-center mb-4">Registrarse</h2>

            <form @submit.prevent="handleRegister">
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

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Registrarse</button>
              </div>
            </form>

            <p class="text-center mt-3">
              ¿Ya tienes una cuenta? 
              <router-link to="/login" class="text-decoration-none">Inicia sesión aquí</router-link>
            </p>

            <!-- Alerta de error -->
            <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
              <i class="bi bi-x-circle"></i> <p><strong>Error:</strong> {{ errorMessage }}</p>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <!-- Alerta de éxito -->
            <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
              <i class="bi bi-check-circle"></i> <p><strong>Éxito:</strong> {{ successMessage }}</p>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
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
      // Validación de contraseñas
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }

      // Verificar que todos los campos están llenos
      if (!this.email || !this.password || !this.confirmPassword) {
        this.errorMessage = 'Por favor, complete todos los campos';
        return;
      }

      try {
        // Intentar crear el usuario con email y contraseña
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        this.successMessage = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        
        // Redirigir a la página de inicio de sesión
        this.$router.push({ name: 'Login' });
      } catch (error) {
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

/* Estilos de la alerta */
.alert {
  border-radius: 12px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 1rem;
  margin-top: 15px;
  animation: slideIn 0.3s ease-out;
}

.alert .btn-close {
  margin-left: 15px;
  color: white;
  opacity: 1;
}

.alert-success {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.alert-danger {
  background-color: #dc3545;
  color: white;
  border-color: #dc3545;
}

.alert-success i, .alert-danger i {
  margin-right: 10px; /* Espacio entre icono y texto */
  font-size: 1.5rem;
}

.alert p {
  margin: 0; /* Eliminar el margen superior e inferior del texto */
}

/* Animación de entrada de alerta */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estilos de la tarjeta */
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


