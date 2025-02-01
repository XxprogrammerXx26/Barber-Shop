
<!-- <template>
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
    };
  },
  methods: {
    async submitReservation() {
      const auth = getAuth();  
      const user = auth.currentUser;  

     
      if (!user) {
        alert('Por favor, inicia sesión para realizar una reserva.');
        this.$router.push('/login');  
        return;
      }

      if (!this.reservation.name || !this.reservation.service || !this.reservation.date || !this.reservation.time) {
        alert('Por favor, completa todos los campos');
        return;
      }

      try {
        console.log('Enviando reserva:', this.reservation);  

       
        await addDoc(collection(db, 'reservations'), {
          ...this.reservation,
          userId: user.uid,  
          userName: user.displayName || user.email  
        });

    
        alert('Reserva realizada con éxito');
        this.resetForm();

      
        this.$router.push('/ListaReserva');
      } catch (error) {
        console.error('Error al realizar la reserva:', error);
        alert('Hubo un problema al procesar la reserva. Inténtalo de nuevo.');
      }
    },

    
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
.hero {
  background-color: #f8f9fa;
}
.form-control {
  max-width: 400px;
  margin: 0 auto;
}
</style> -->












































<template>
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
        <input v-model="reservation.date" type="date" id="date" class="form-control" required />
      </div>

      <div class="mb-4">
        <label for="time" class="form-label">Hora</label>
        <input v-model="reservation.time" type="time" id="time" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary btn-lg btn-block">Confirmar Reserva</button>
    </form>
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
    };
  },
  methods: {
    async submitReservation() {
      const auth = getAuth();  
      const user = auth.currentUser;  

      // Verificar si el usuario está autenticado
      if (!user) {
        alert('Por favor, inicia sesión para realizar una reserva.');
        this.$router.push('/login');  
        return;
      }

      // Verificar si todos los campos están completos
      if (!this.reservation.name || !this.reservation.service || !this.reservation.date || !this.reservation.time) {
        alert('Por favor, completa todos los campos');
        return;
      }

      try {
        console.log('Enviando reserva:', this.reservation);  

        // Agregar la reserva a Firestore
        await addDoc(collection(db, 'reservations'), {
          ...this.reservation,
          userId: user.uid,  
          userName: user.displayName || user.email  
        });

        // Confirmar éxito y resetear formulario
        alert('Reserva realizada con éxito');
        this.resetForm();

        // Redirigir a la lista de reservas
        this.$router.push('/ListaReserva');
      } catch (error) {
        console.error('Error al realizar la reserva:', error);
        alert('Hubo un problema al procesar la reserva. Inténtalo de nuevo.');
      }
    },

    // Función para resetear el formulario después de una reserva exitosa
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
  background-color: #f7f9fc; /* Fondo suave */
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
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
