import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcQsZD5kOZi7uxdRFtZNbFbgigNjcAJ4c",
  authDomain: "tempat-cerita-ef555.firebaseapp.com",
  databaseURL: "https://tempat-cerita-ef555-default-rtdb.firebaseio.com",
  projectId: "tempat-cerita-ef555",
  storageBucket: "tempat-cerita-ef555.firebasestorage.app",
  messagingSenderId: "605791578144",
  appId: "1:605791578144:web:a7d161634ce2ee16d7b445",
  measurementId: "G-9DEDTLQT77"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
