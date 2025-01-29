




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // For authentication
// import { getAnalytics } from "firebase/analytics";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAuVF3Kp4G3DGCOAqlcwOv_ko89LA9Dd-k",
//   authDomain: "furniture-website-fabc0.firebaseapp.com",
//   projectId: "furniture-website-fabc0",
//   storageBucket: "furniture-website-fabc0.appspot.com", // Fixed typo
//   messagingSenderId: "679615788229",
//   appId: "1:679615788229:web:3d6bba9e6a8dade210acac",
//   measurementId: "G-W532CDB5E8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app); // Export `auth` for authentication
// export const analytics = getAnalytics(app); // Analytics export






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore database
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVF3Kp4G3DGCOAqlcwOv_ko89LA9Dd-k",
  authDomain: "furniture-website-fabc0.firebaseapp.com",
  projectId: "furniture-website-fabc0",
  storageBucket: "furniture-website-fabc0.appspot.com", // Fixed typo
  messagingSenderId: "679615788229",
  appId: "1:679615788229:web:3d6bba9e6a8dade210acac",
  measurementId: "G-W532CDB5E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export `auth` for authentication
export const db = getFirestore(app); // Export `db` for Firestore database
export const analytics = getAnalytics(app); // Export `analytics` for Firebase analytics
