<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYh4z7rLVuZkg5IvN3oqTNkvBlJ3_Mr6I",
    authDomain: "soufian-tech-65317.firebaseapp.com",
    projectId: "soufian-tech-65317",
    storageBucket: "soufian-tech-65317.appspot.com",
    messagingSenderId: "461190381375",
    appId: "1:461190381375:web:5140031d5d28aa4e6f9d8a",
    measurementId: "G-W40NC4FLN4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>