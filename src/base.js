import * as firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBKA7hgUvatp7kvn-8nwoT6NREw0-P7f_Q",
  authDomain: "presensi-iot-934b3.firebaseapp.com",
  projectId: "presensi-iot-934b3",
  storageBucket: "presensi-iot-934b3.appspot.com",
  messagingSenderId: "954001424650",
  appId: "1:954001424650:web:df0b311e7fd86436a47af3",
  measurementId: "G-7XT0BWMLL7"
});

export const auth = app.auth()
export const db = app.firestore()
export default app;