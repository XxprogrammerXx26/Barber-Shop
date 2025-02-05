

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

        <div class="collapse navbar-collapse text-center" id="navbarNav">
          <ul class="navbar-nav ms-auto"></ul>
        </div>
      </div>
    </nav>

 
    <div class="reservas-list">
      <h3 class="text-center mb-5">Reservas Realizadas</h3>
      <div v-if="reservations.length" class="row">
        <div v-for="(reservation, index) in reservations" :key="reservation.id" class="col-lg-4 col-md-6 col-12 mb-4">
          <div class="card shadow-lg rounded">
            <div class="card-body">
              <h5 class="card-title text-primary font-weight-bold">{{ reservation.name }}</h5>
              <p class="card-text"><strong>Servicio:</strong> {{ reservation.service }}</p>
              <p class="card-text"><strong>Fecha:</strong> {{ reservation.date }}</p>
              <p class="card-text"><strong>Hora:</strong> {{ reservation.time }}</p>
             
              <button @click="deleteReservation(reservation.id)" class="btn btn-danger btn-sm mt-2">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-muted">No hay reservas aún.</p>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';  
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default {
  data() {
    return {
      reservations: [],
    };
  },
  async created() {
    try {
      const querySnapshot = await getDocs(collection(db, 'reservations'));
      this.reservations = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
    }
  },
  methods: {
    
    async deleteReservation(reservationId) {
      try {
        
        await deleteDoc(doc(db, 'reservations', reservationId));


        this.reservations = this.reservations.filter(reservation => reservation.id !== reservationId);
      } catch (error) {
        console.error('Error al eliminar la reserva:', error);
      }
    },
  },
};
</script>

<style scoped>
.reservas-list {
  margin: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.75rem;
  color: #343a40;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.3rem;
  color: #007bff;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
}

.text-center {
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.col-lg-4, .col-md-6, .col-12 {
  flex: 0 0 auto;
  max-width: 100%;
}

.col-md-6 {
  max-width: 48%;
}

.col-lg-4 {
  max-width: 31%;
}

@media (max-width: 768px) {
  .col-md-6 {
    max-width: 100%;
  }
}

.text-muted {
  color: #6c757d;
}

.mb-5 {
  margin-bottom: 30px;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>




















































