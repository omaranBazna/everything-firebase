    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

    import {getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDNbYqJuvvElHEVR3jKE-UKK9-fCYhgTVo",
      authDomain: "fir-everything-7806a.firebaseapp.com",
      projectId: "fir-everything-7806a",
      storageBucket: "fir-everything-7806a.appspot.com",
      messagingSenderId: "18912452341",
      appId: "1:18912452341:web:6a514adf14259ebf2b6fbc",
      measurementId: "G-8FVF2S4RT9"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const posts=collection(db,"posts")
  
const querySnapshot = await getDocs(posts);
querySnapshot.forEach((doc) => {
// doc.data() is never undefined for query doc snapshots
console.log(doc.id, " => ", doc.data());
});
