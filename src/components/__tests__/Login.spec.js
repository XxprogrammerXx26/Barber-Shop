import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue'; 
import { createRouter, createWebHistory } from 'vue-router';


jest.mock('../firebase', () => ({
  auth: {
    currentUser: null,
  },
  signInWithEmailAndPassword: jest.fn(),
}));

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
   
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/', name: 'MenuPage' }],
    });

   
    wrapper = mount(Login, {
      global: {
        plugins: [router],
      },
    });
  });

  it('renders the login form', () => {
   
    expect(wrapper.find('input[type="email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('displays error message for incorrect login', async () => {
    
    const { signInWithEmailAndPassword } = require('../firebase');
    signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Correo electrónico o contraseña incorrectos'));

    
    await wrapper.setData({
      email: 'incorrect@example.com',
      password: 'wrongpassword',
    });

 
    await wrapper.find('form').trigger('submit.prevent');

   
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    expect(wrapper.text()).toContain('Correo electrónico o contraseña incorrectos');
  });

  it('displays success message for correct login', async () => {
    
    const { signInWithEmailAndPassword } = require('../firebase');
    signInWithEmailAndPassword.mockResolvedValueOnce({
      user: {
        email: 'test@example.com',
      },
    });

   
    await wrapper.setData({
      email: 'test@example.com',
      password: 'correctpassword',
    });

    await wrapper.find('form').trigger('submit.prevent');

   
    expect(wrapper.find('.alert-success').exists()).toBe(true);
    expect(wrapper.text()).toContain('¡Bienvenido test@example.com!');
  });

  it('redirects to the MenuPage after successful login', async () => {
   
    const { signInWithEmailAndPassword } = require('../firebase');
    signInWithEmailAndPassword.mockResolvedValueOnce({
      user: {
        email: 'test@example.com',
      },
    });


    await wrapper.setData({
      email: 'test@example.com',
      password: 'correctpassword',
    });

 
    await wrapper.find('form').trigger('submit.prevent');


    expect(wrapper.vm.$router.currentRoute.value.name).toBe('MenuPage');
  });
});
