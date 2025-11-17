import { db } from "./config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const btn = document.getElementById("kirimBtn");
const input = document.getElementById("ceritaInput");
const status = document.getElementById("status");

btn.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text) {
        status.innerHTML = "Isi dulu bre...";
        return;
    }

    try {
        await addDoc(collection(db, "cerita"), {
            isi: text,
            waktu: serverTimestamp()
        });

        status.innerHTML = "Cerita berhasil dikirim ✔";
        input.value = "";
    } catch (e) {
        status.innerHTML = "Error woy: " + e.message;
    }
});
