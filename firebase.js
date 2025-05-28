// import { initializeApp, getApp, getApps } from 'firebase/app';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCqIGD2iDuy_ess83w9ohnkwbQM795Mqzc",
//   authDomain: "restroo-696bf.firebaseapp.com",
//   projectId: "restroo-696bf",
//   storageBucket: "restroo-696bf.firebasestorage.app",
//   messagingSenderId: "699142449096",
//   appId: "1:699142449096:web:64eb529e286066e92c02fd",
//   measurementId: "G-XNX1P6DGRG"
// };
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });
// const db = getFirestore(app);

// export { auth, db };
import { initializeApp, getApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqIGD2iDuy_ess83w9ohnkwbQM795Mqzc",
  authDomain: "restroo-696bf.firebaseapp.com",
  projectId: "restroo-696bf",
  storageBucket: "restroo-696bf.firebasestorage.app",
  messagingSenderId: "699142449096",
  appId: "1:699142449096:web:64eb529e286066e92c02fd",
  measurementId: "G-XNX1P6DGRG"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

export { auth, db };
