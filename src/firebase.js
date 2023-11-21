import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBuLJUWvVXWuQiu1UIZJiyq_pwYFm3N3ng",
  authDomain: "local-proxy-367416.firebaseapp.com",
  projectId: "local-proxy-367416",
  storageBucket: "local-proxy-367416.appspot.com",
  messagingSenderId: "972545789342",
  appId: "1:972545789342:web:d1d6ed5f8ae17d35f3da8f",
  measurementId: "G-B6X4BGSSZZ"
  };
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();