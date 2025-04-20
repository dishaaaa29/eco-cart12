// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCeaq0p-aeGETOApKk2tgiPfTOHO5TAYQU",
    authDomain: "ecocart-1e3e9.firebaseapp.com",
    projectId: "ecocart-1e3e9",
    storageBucket: "ecocart-1e3e9.firebasestorage.app",
    messagingSenderId: "290935406138",
    appId: "1:290935406138:web:543007ce62f4975810ff03",
    measurementId: "G-2F4KVDLE0K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const pass = document.getElementById('registerPassword').value;
    const name = document.getElementById('registerName').value;
  });