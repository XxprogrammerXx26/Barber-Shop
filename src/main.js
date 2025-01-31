//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import { auth } from './firebase'; 
// import { onAuthStateChanged } from 'firebase/auth';


// let app;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // Si hay un usuario autenticado, redirige al menú
//     if (!app) {
//       app = createApp(App);
//       app.use(router);
//       app.mount('#app');
//       router.push({ name: 'MenuPage' }); // Redirigir a la página de menú
//     }
//   } else {
//     // Si no hay usuario autenticado, deja que la app cargue normalmente
//     if (!app) {
//       app = createApp(App);
//       app.use(router);
//       app.mount('#app');
//     }
//   }
// });


const app = createApp(App)


app.use(createPinia())

app.use(router)






app.mount('#app')
