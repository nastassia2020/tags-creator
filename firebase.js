import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkDGggOQD-X6XE_hQdJt_ZQwg9ZPxXDX8",
  authDomain: "tags-creator.firebaseapp.com",
  projectId: "tags-creator",
  storageBucket: "tags-creator.appspot.com",
  messagingSenderId: "950396383675",
  appId: "1:950396383675:web:362f823455e1a8d894d49e",
  measurementId: "G-T78QRLKCDP",
};

export const app = initializeApp(firebaseConfig);
