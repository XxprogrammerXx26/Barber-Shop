
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

    <div v-if="showForm" class="mt-4" id="ReservaTurno">
      <h3 class="fw-bold text-center mb-4">Formulario de Reserva</h3>
      <form @submit.prevent="submitReservation">
        <div class="mb-4">
          <label for="name" class="form-label">Tu Nombre</label>
          <input v-model="reservation.name" type="text" id="name" class="form-control" required />
        </div>
        <div class="mb-4">
          <label for="service" class="form-label">Servicio</label>
          <select v-model="reservation.service" id="service" class="form-control" required>
            <option value="Corte de Cabello">Corte de Cabello</option>
            <option value="Afeitado">Afeitado</option>
            <option value="Corte y Afeitado">Corte y Afeitado</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="date" class="form-label">Fecha</label>
          <input v-model="reservation.date" type="date" id="date" class="form-control" required @change="checkDay" />
        </div>
        <div class="mb-4">
          <label for="time" class="form-label">Hora</label>
          <input v-model="reservation.time" type="time" id="time" class="form-control" required @change="validateTime" />
        </div>
        <button :disabled="invalidTime || isWeekend" type="submit" class="btn btn-primary btn-lg btn-block">Confirmar Reserva</button>
        <p v-if="isWeekend" class="text-danger text-center">El domingo no se realizan reservas.</p>
        <p v-if="invalidTime" class="text-danger text-center">La hora seleccionada no está disponible. Horario permitido: Lunes a Sábado de 9 AM a 7 PM</p>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default {
  data() {
    return {
      showForm: true,
      reservation: {
        name: '',
        service: '',
        date: '',
        time: ''
      },
      invalidTime: false,
      isWeekend: false,
    };
  },
  methods: {
   
    checkDay() {
      const currentDate = new Date(this.reservation.date);
      const dayOfWeek = currentDate.getDay(); 

      // Bloquear solo el domingo (día 0) -> el Bloqueo comienza con el dia 6 contando desde cero
      this.isWeekend = dayOfWeek === 6; 
    },

    // Validación de la hora
    validateTime() {
      const currentDate = new Date(this.reservation.date);
      const currentDay = currentDate.getDay(); 
      const reservationTime = new Date(`${this.reservation.date}T${this.reservation.time}`);
      const reservationHour = reservationTime.getHours();

      // Bloquear solo el domingo (día 0)
      if (currentDay === 0) {
        this.invalidTime = true; 
        return;
      }

      // Validar que el horario de la reserva esté dentro de 9 AM a 7 PM, de lunes a sábado
      const isValidTime = (currentDay >= 1 && currentDay <= 6 && reservationHour >= 9 && reservationHour < 19); 

      this.invalidTime = !isValidTime;
    },

    // Enviar la reserva
    async submitReservation() {
      const auth = getAuth();
      const user = auth.currentUser;

      // Verificar que el usuario esté logueado
      if (!user) {
        alert('Por favor, inicia sesión para realizar una reserva.');
        this.$router.push('/login');
        return;
      }

      // Verificar que todos los campos estén completos
      if (!this.reservation.name || !this.reservation.service || !this.reservation.date || !this.reservation.time) {
        alert('Por favor, completa todos los campos');
        return;
      }

      const currentDay = new Date(this.reservation.date).getDay();
      if (currentDay === 0) {
        alert('El domingo no se realizan reservas. Por favor, elige otro día.');
        return;
      }

      const reservationTime = new Date(`${this.reservation.date}T${this.reservation.time}`);
      const reservationHour = reservationTime.getHours();

      // Validar que la hora esté dentro del horario permitido (lunes a sábado de 9 AM a 7 PM)
      const isValidTime = (currentDay >= 1 && currentDay <= 6 && reservationHour >= 9 && reservationHour < 19);

      if (!isValidTime) {
        alert('La hora seleccionada no está dentro del horario disponible. Solo se permiten reservas de lunes a sábado de 9 AM a 7 PM.');
        return;
      }

      try {
        console.log('Enviando reserva:', this.reservation);

        // Guardar la reserva en Firestore
        await addDoc(collection(db, 'reservations'), {
          ...this.reservation,
          userId: user.uid,
          userName: user.displayName || user.email
        });

        alert('Reserva realizada con éxito');
        this.resetForm();

        // Redirigir a la lista de reservas
        this.$router.push('/ListaReserva');
      } catch (error) {
        console.error('Error al realizar la reserva:', error);
        alert('Hubo un problema al procesar la reserva. Inténtalo de nuevo.');
      }
    },

    // Resetear el formulario
    resetForm() {
      this.reservation.name = '';
      this.reservation.service = '';
      this.reservation.date = '';
      this.reservation.time = '';
      this.showForm = false;
    }
  }
};
</script>

<style scoped>
#ReservaTurno {
  background-color: #f7f9fc;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h3 {
  color: #333;
  font-size: 1.8rem;
}

.form-label {
  color: #555;
  font-size: 1rem;
}

.form-control {
  max-width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  border-color: #08127c;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

.btn {
  font-size: 1.1rem;
  padding: 12px 24px;
  width: 100%;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary {
  background-color: #090909;
  border-color: #ffffff;
}

.btn-primary:hover {
  background-color: #000000;
  border-color: #76787a;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  #ReservaTurno {
    padding: 20px;
  }

  .btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>


