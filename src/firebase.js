import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// The config comes from .env.local (see .env.example). These values identify your
// project; they are not secrets. Security comes from Firebase Auth and security rules.
const firebaseConfig = {
  apiKey: "AIzaSyB0s3ndQ9JyUCWRA74Hclpa5aFk77KXG0w",
  authDomain: "campuseats-2414210.firebaseapp.com",
  projectId: "campuseats-2414210",
  storageBucket: "campuseats-2414210.firebasestorage.app",
  messagingSenderId: "672860687157",
  appId: "1:672860687157:web:b2d4d43c2520867a0bda7c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
