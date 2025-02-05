<!-- 
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
    
         
        </ul>
      </div>
    </div>
  </nav>



    <div class="user-profile">
      <h3 class="text-center mb-4">Perfil de Usuario</h3>
  
  
      <div v-if="!user">
        <p class="alert alert-warning">Debes iniciar sesión para acceder a tu perfil.</p>
        <router-link to="/login" class="btn btn-primary">Ir al inicio de sesión</router-link>
      </div>
  
     
      <div v-else>
        <div class="user-info">
          <p><strong>Nombre:</strong> {{ user.displayName || user.email }}</p>
          <p><strong>Correo Electrónico:</strong> {{ user.email }}</p>
          
          
          <div v-if="userHistory && userHistory.length">
            <h4>Historial:</h4>
            <ul>
              <li v-for="(item, index) in userHistory" :key="index">{{ item }}</li>
            </ul>
          </div>
  
          <button @click="changePassword" class="btn btn-warning">Cambiar contraseña</button>
  
          <button @click="deleteAccount" class="btn btn-danger mt-3">Borrar cuenta</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuth, updatePassword, deleteUser, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
  
  export default {
    data() {
      return {
        user: null, 
        userHistory: null, 
      };
    },
    created() {
      const auth = getAuth();
      
   
      onAuthStateChanged(auth, (user) => {
        this.user = user;  
        if (user) {
          this.loadUserHistory();  
        }
      });
    },
    methods: {
      async loadUserHistory() {
     
        this.userHistory = ["Actividad 1", "Actividad 2", "Actividad 3"]; 
      },
  
  
      async changePassword() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const newPassword = prompt("Introduce la nueva contraseña:");
          if (newPassword) {
            try {
              await updatePassword(user, newPassword);
              alert("Contraseña actualizada con éxito.");
            } catch (error) {
              console.error(error);
              alert("Hubo un error al cambiar la contraseña.");
            }
          }
        }
      },
  
  
      async deleteAccount() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const confirmation = confirm("¿Estás seguro de que deseas eliminar tu cuenta?");
          if (confirmation) {
            try {
              await deleteUser(user);
              alert("Cuenta eliminada exitosamente.");
             
              this.$router.push('/login');
            } catch (error) {
              console.error(error);
              alert("Hubo un error al eliminar la cuenta.");
            }
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .user-info {
    margin-bottom: 20px;
  }
  
  h3 {
    color: #333;
  }
  
  button {
    width: 100%;
    margin-top: 10px;
  }
  
  .alert-warning {
    background-color: #ff9800;
    color: white;
  }
  </style>
  
   -->
  























   







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
          </ul>
        </div>
      </div>
    </nav>
  
    <div class="user-profile">
      <h3 class="text-center mb-4">Perfil de Usuario</h3>
  
      <div v-if="!user">
        <p class="alert alert-warning">Debes iniciar sesión para acceder a tu perfil.</p>
        <router-link to="/login" class="btn btn-primary">Ir al inicio de sesión</router-link>
      </div>
  
      <div v-else>
        <div class="user-info">
          <!-- Correo oculto -->
          <p><strong>Usuario Conectado:</strong> Usuario en Linea</p>
  
          <button @click="changePassword" class="btn btn-warning">Cambiar contraseña</button>
          <button @click="deleteAccount" class="btn btn-danger mt-3">Borrar cuenta</button>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  import { getAuth, updatePassword, deleteUser, onAuthStateChanged } from 'firebase/auth';
  
  export default {
    data() {
      return {
        user: null, 
      };
    },
    created() {
      const auth = getAuth();
      
      onAuthStateChanged(auth, (user) => {
        this.user = user;  
        if (user) {
          this.reloadUserData(user); // Actualizamos el estado del usuario para asegurarnos de que tenemos la información más reciente
        }
      });
    },
    methods: {
      async reloadUserData(user) {
        try {
          // Forzamos la recarga de los datos del usuario
          await user.reload();
        } catch (error) {
          console.error("Error al recargar datos del usuario:", error);
        }
      },
  
      async changePassword() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const newPassword = prompt("Introduce la nueva contraseña:");
          if (newPassword) {
            try {
              await updatePassword(user, newPassword);
              alert("Contraseña actualizada con éxito.");
            } catch (error) {
              console.error(error);
              alert("Hubo un error al cambiar la contraseña.");
            }
          }
        }
      },
  
      async deleteAccount() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          const confirmation = confirm("¿Estás seguro de que deseas eliminar tu cuenta?");
          if (confirmation) {
            try {
              await deleteUser(user);
              alert("Cuenta eliminada exitosamente.");
              this.$router.push('/login');
            } catch (error) {
              console.error(error);
              alert("Hubo un error al eliminar la cuenta.");
            }
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .user-info {
    margin-bottom: 20px;
  }
  
  h3 {
    color: #333;
  }
  
  button {
    width: 100%;
    margin-top: 10px;
  }
  
  .alert-warning {
    background-color: #ff9800;
    color: white;
  }
  
  .text-success {
    color: green;
  }
  
  .text-danger {
    color: red;
  }
  </style>
  





