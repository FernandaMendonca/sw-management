import firebase from 'firebase';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyD_U5TaXEG7m72O1rVMJfBQxhaCH_8toAU',
  authDomain: 'sw-management.firebaseapp.com',
  projectId: 'sw-management',
  storageBucket: 'sw-management.appspot.com',
  messagingSenderId: '196757274953',
  appId: '1:196757274953:web:74f410be11fadd86f15a98',
  measurementId: 'G-QQ0VB0E8JV',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
