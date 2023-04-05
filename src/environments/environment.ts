// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
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
  production: false
};

export const app = initializeApp(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
