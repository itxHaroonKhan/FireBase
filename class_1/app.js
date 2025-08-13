import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWexUtD86uY1fE7Ye87MzaZzNlIaQ0o2c",
  authDomain: "login-deffe.firebaseapp.com",
  projectId: "login-deffe",
  storageBucket: "login-deffe.firebasestorage.app",
  messagingSenderId: "264208730715",
  appId: "1:264208730715:web:77c8a8750234ebc4ab8d7e",
  measurementId: "G-T4MXP6XJ7E"
};






const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("auth_btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User Registered:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});
