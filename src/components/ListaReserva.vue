<!-- 

   <template>
    <div class="reservas-list">
      <h3>Reservas Realizadas</h3>
      <ul v-if="reservations.length">
        <li v-for="(reservation, index) in reservations" :key="index">
          <strong>Nombre:</strong> {{ reservation.name }}<br />
          <strong>Servicio:</strong> {{ reservation.service }}<br />
          <strong>Fecha:</strong> {{ reservation.date }}<br />
          <strong>Hora:</strong> {{ reservation.time }}<br />
        </li>
      </ul>
      <p v-else>No hay reservas aún.</p>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase';
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        reservations: [],
      };
    },
    async created() {
     
      try {
        const querySnapshot = await getDocs(collection(db, 'reservations'));
        this.reservations = querySnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .reservas-list {
    margin: 20px;
  }
  </style> -->
  






















  <template>
    <div class="reservas-list">
      <h3 class="text-center mb-4">Reservas Realizadas</h3>
      <div v-if="reservations.length" class="row">
        <!-- Crear una tarjeta por cada reserva -->
        <div v-for="(reservation, index) in reservations" :key="index" class="col-md-4 mb-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title text-primary">{{ reservation.name }}</h5>
              <p class="card-text"><strong>Servicio:</strong> {{ reservation.service }}</p>
              <p class="card-text"><strong>Fecha:</strong> {{ reservation.date }}</p>
              <p class="card-text"><strong>Hora:</strong> {{ reservation.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="text-center">No hay reservas aún.</p>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase';
  import { collection, getDocs } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        reservations: [],
      };
    },
    async created() {
      // Obtener todas las reservas desde Firestore
      try {
        const querySnapshot = await getDocs(collection(db, 'reservations'));
        this.reservations = querySnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    }
  };
  </script>
  
  <style scoped>
  .reservas-list {
    margin: 20px;
    padding: 20px;
  }
  
  .card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
  .text-center {
    text-align: center;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .col-md-4 {
    flex: 0 0 30%;
  }
  
  @media (max-width: 768px) {
    .col-md-4 {
      flex: 0 0 100%;
    }
  }
  </style>
  




