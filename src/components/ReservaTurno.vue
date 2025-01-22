
   <template>
    <div v-if="showForm" class="mt-4" id="ReservaTurno">
      <h3 class="fw-bold">Formulario de Reserva</h3>
      <form @submit.prevent="submitReservation">
        <div class="mb-3">
          <label for="name" class="form-label">Tu Nombre</label>
          <input v-model="reservation.name" type="text" id="name" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="service" class="form-label">Servicio</label>
          <select v-model="reservation.service" id="service" class="form-control" required>
            <option value="Corte de Cabello">Corte de Cabello</option>
            <option value="Afeitado">Afeitado</option>
            <option value="Corte y Afeitado">Corte y Afeitado</option>
          </select>
        </div>
  
        <div class="mb-3">
          <label for="date" class="form-label">Fecha</label>
          <input v-model="reservation.date" type="date" id="date" class="form-control" required />
        </div>
  
        <div class="mb-3">
          <label for="time" class="form-label">Hora</label>
          <input v-model="reservation.time" type="time" id="time" class="form-control" required />
        </div>
  
        <button type="submit" class="btn btn-dark btn-lg">Confirmar Reserva</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        showForm: true,  // Para mostrar u ocultar el formulario
        reservation: {
          name: '',
          service: '',
          date: '',
          time: ''
        },
      };
    },
    methods: {
      async submitReservation() {
       
        if (!this.reservation.name || !this.reservation.service || !this.reservation.date || !this.reservation.time) {
          alert('Por favor, completa todos los campos');
          return;
        }
  
        try {
          console.log('Enviando reserva:', this.reservation); // Verifica que los datos estén correctos
          const response = await axios.post('http://localhost:3000/reservations', this.reservation);
          
         
          if (response.status === 200) {
            alert('Reserva realizada con éxito');
            this.resetForm();
          }
        } catch (error) {
          console.error('Error al realizar la reserva:', error);
          alert('Hubo un problema al procesar la reserva. Inténtalo de nuevo.');
        }
      },
  
      // Restablecer el formulario
      resetForm() {
        this.reservation.name = '';
        this.reservation.service = '';
        this.reservation.date = '';
        this.reservation.time = '';
        this.showForm = false; // Ocultar el formulario después de la reserva
      }
    }
  };
  </script>
  
  <style scoped>
  .hero {
    background-color: #f8f9fa;
  }
  .form-control {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  
