import firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDmyj2Ugb8yuFzt-JilZz2G6eFpM7vSsg",
  authDomain: "trualty-ventures-pvt-ltd.firebaseapp.com",
  databaseURL: "https://trualty-ventures-pvt-ltd-default-rtdb.firebaseio.com",
  projectId: "trualty-ventures-pvt-ltd",
  storageBucket: "trualty-ventures-pvt-ltd.appspot.com",
  messagingSenderId: "625372217641",
  appId: "1:625372217641:web:2a86bb8b68968202c77738",
};

// Initialize Firebase
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);
export const database = app.database();
export const auth = app.auth();

export default app;
