const firebaseConfig = {
  apiKey: "AIzaSyANIhOc2FMIYGYw029OHYdNj9z01HWQbEs",
  authDomain: "pavax-f0720.firebaseapp.com",
  databaseURL: "https://pavax-f0720-default-rtdb.firebaseio.com",
  projectId: "pavax-f0720",
  storageBucket: "pavax-f0720.appspot.com",
  messagingSenderId: "694407956222",
  appId: "1:694407956222:web:85b93bfa5bc2efd6d947af",
  measurementId: "G-FRBD6PWCYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
