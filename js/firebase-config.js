 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaA0-Ji_dIE7004DvdK9Uy0qxiEhqOoUY",
    authDomain: "dabur-stock.firebaseapp.com",
    projectId: "dabur-stock",
    storageBucket: "dabur-stock.firebasestorage.app",
    messagingSenderId: "627999643598",
    appId: "1:627999643598:web:a2fee5a22a113d6f7b3d9f",
    measurementId: "G-ZS52JDZV2M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
