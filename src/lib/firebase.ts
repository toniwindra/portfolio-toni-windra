import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import config from '../../firebase-applet-config.json';

// Support both Next.js (NEXT_PUBLIC_), Vite (VITE_), and JSON config fallbacks
const apiKey = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_API_KEY) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_API_KEY) ||
  config.apiKey;

const authDomain = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN) ||
  config.authDomain;

const projectId = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_PROJECT_ID) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID) ||
  config.projectId;

const storageBucket = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET) ||
  config.storageBucket ||
  `${projectId}.firebasestorage.app`;

const messagingSenderId = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID) ||
  config.messagingSenderId;

const appId = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_APP_ID) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_APP_ID) ||
  config.appId;

const measurementId = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIREBASE_MEASUREMENT_ID) ||
  config.measurementId;

const firestoreDatabaseId = 
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FIRESTORE_DATABASE_ID) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_FIRESTORE_DATABASE_ID) ||
  config.firestoreDatabaseId;

export const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  ...(measurementId ? { measurementId } : {})
};

// Initialize Firebase (singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firestore with custom database ID if present
let firestoreDb;
try {
  firestoreDb = initializeFirestore(app, { 
    experimentalForceLongPolling: true 
  }, firestoreDatabaseId || '(default)');
} catch (e) {
  // If already initialized (e.g., during HMR)
  firestoreDb = getFirestore(app, firestoreDatabaseId || '(default)');
}
export const db = firestoreDb;

// Initialize Firebase Storage
export const storage = getStorage(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Analytics (only on client-side)
export let analytics: any = null;
if (typeof window !== 'undefined') {
  try {
    isSupported().then((supported) => {
      if (supported) {
        try {
          analytics = getAnalytics(app);
        } catch (analyticsError) {
          console.warn('Firebase Analytics failed to initialize (often due to HMR or ad blockers):', analyticsError);
        }
      }
    }).catch(console.warn);
  } catch (err) {
    console.warn('Firebase Analytics isSupported check failed:', err);
  }
}

export default app;
