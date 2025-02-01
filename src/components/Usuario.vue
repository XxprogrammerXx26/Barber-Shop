
   <template>
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
          
          <!-- Historial (si tienes datos para mostrar) -->
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
      
      // Escuchar cambios en el estado de autenticación (como iniciar sesión o cerrar sesión)
      onAuthStateChanged(auth, (user) => {
        this.user = user;  // Se asigna el usuario autenticado si hay uno
        if (user) {
          this.loadUserHistory();  // Si el usuario está autenticado, carga el historial
        }
      });
    },
    methods: {
      async loadUserHistory() {
        // Aquí debes agregar la lógica para obtener el historial del usuario
        // Ejemplo: hacer una consulta a la base de datos para cargar el historial
        // this.userHistory = await fetchUserHistoryFromDatabase(this.user.uid);
        // Para este ejemplo, supongamos que el historial es simplemente un array:
        this.userHistory = ["Actividad 1", "Actividad 2", "Actividad 3"]; // Datos ficticios
      },
  
      // Función para cambiar la contraseña
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
  
      // Función para borrar la cuenta
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
  
  
  
