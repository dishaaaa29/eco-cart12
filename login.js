
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZPFKqdRR295oPTgevcBsQcohFC5tQwA",
  authDomain: "eco0905-ac97d.firebaseapp.com",
  projectId: "eco0905-ac97d",
  storageBucket: "eco0905-ac97d.firebasestorage.app",
  messagingSenderId: "1033460026552",
  appId: "1:1033460026552:web:a293039269ee3c870a384d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const email = document.getElementById('loginEmail').Value;
const password = document.getElementById('loginPassword').Value;

const submit = document.getElementById('submit').Value;
submit.addEventListener("click",function(event){
event.preventDefalt()
alert(5)
})