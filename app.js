// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { firebaseConfig } from "./firebase.js";

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Submit cerita
const btn = document.getElementById("submitCerita");
btn.addEventListener("click", function () {
  const text = document.getElementById("cerita").value;

  if (text.trim() === "") {
    alert("Isi cerita dulu bre");
    return;
  }

  const dataRef = ref(db, "cerita");
  const newData = push(dataRef);

  set(newData, {
    isi: text,
    tanggal: new Date().toISOString()
  });

  alert("Cerita terkirim 🔥");
  document.getElementById("cerita").value = "";
});
