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

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(() => {
      document.getElementById('message').textContent = 'Login failed. Please check your credentials.';
    });
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => {
      window.location.href = 'dashboard.html';
    })
    .catch(() => {
      document.getElementById('message').textContent = 'Google login failed. Please try again.';
    });
}
