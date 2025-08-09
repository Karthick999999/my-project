// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAZ6wdQXq2uNIxjTx9xlP9113m16U1jwBA",
  authDomain: "capstone-project-bd416.firebaseapp.com",
  projectId: "capstone-project-bd416",
  storageBucket: "capstone-project-bd416.firebasestorage.app",
  messagingSenderId: "896939902411",
  appId: "1:896939902411:web:7dbb84e45c8042c84ba24e",
  measurementId: "G-GBPNR6GNCC"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup(role) {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch(() => {
      document.getElementById('signup-message').textContent = 'Sign up failed. Please check your details.';
    });
}
