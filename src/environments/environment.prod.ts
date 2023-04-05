import { initializeApp } from "firebase/app";
export const environment = {
  firebase : {
    apiKey: "AIzaSyA64qH4sTqW2jU2a-fr8eEsJ1UMeSoiuFE",
    authDomain: "exposethefuture-5a692.firebaseapp.com",
    projectId: "exposethefuture-5a692",
    storageBucket: "exposethefuture-5a692.appspot.com",
    messagingSenderId: "113576060894",
    appId: "1:113576060894:web:6228d53f8b32c1c6c45f4f"
  },
  production: true
};
export const app = initializeApp(environment.firebase);
