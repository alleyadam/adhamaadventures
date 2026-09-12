import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, initializeFirestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from './config';

/**
 * Singleton instances to avoid re-initialization during HMR in development.
 */
let firebaseApp: FirebaseApp;
let firestoreDb: Firestore;
let firebaseAuth: Auth;
let firebaseStorage: FirebaseStorage;

/**
 * Initializes Firebase services with settings optimized for proxied environments.
 * This is separated from the main barrel file to avoid circular dependencies.
 */
export function initializeFirebase(): {
  app: FirebaseApp;
  db: Firestore;
  auth: Auth;
  storage: FirebaseStorage;
} {
  if (getApps().length > 0) {
    firebaseApp = getApp();
    // Use getFirestore to retrieve existing instance if already initialized
    firestoreDb = getFirestore(firebaseApp);
    firebaseAuth = getAuth(firebaseApp);
    firebaseStorage = getStorage(firebaseApp);
  } else {
    firebaseApp = initializeApp(firebaseConfig);
    
    /**
     * experimentalForceLongPolling is the most reliable method for 
     * environments like Cloud Workstations/Firebase Studio where 
     * standard WebSocket/GRPC connections are frequently throttled or blocked.
     */
    firestoreDb = initializeFirestore(firebaseApp, {
      experimentalForceLongPolling: true,
    });
    
    firebaseAuth = getAuth(firebaseApp);
    firebaseStorage = getStorage(firebaseApp);
  }

  return { 
    app: firebaseApp, 
    db: firestoreDb, 
    auth: firebaseAuth, 
    storage: firebaseStorage 
  };
}
