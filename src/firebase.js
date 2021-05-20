import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDNMiO8B_t2ffsFvL3D2-fr094eG934UTM",
  authDomain: "traveling-66957.firebaseapp.com",
  projectId: "traveling-66957",
  storageBucket: "traveling-66957.appspot.com",
  messagingSenderId: "414899351570",
  appId: "1:414899351570:web:8b7ca2c9f9d9822788a8cb",
  measurementId: "G-65964428VH",
});

const db = firebase.firestore();

export { db };
