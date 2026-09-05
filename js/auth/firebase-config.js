/* ============================================================
   FIREBASE CONFIGURATION
   ------------------------------------------------------------
   HOW TO GET YOUR OWN KEYS (takes about 3 minutes):
   1. Go to https://console.firebase.google.com and create a project
      (or use an existing one).
   2. Inside the project, click the "</>" (Web) icon to register a
      web app. Give it any nickname (e.g. "StudyQuest").
   3. Firebase will show you a config object exactly like the one
      below — copy your real values into the object below.
   4. In the Firebase console sidebar go to Build → Authentication →
      Get Started → Sign-in method → enable "Email/Password".
   5. In the Firebase console sidebar go to Build → Firestore Database
      → Create database → start in **production mode** (recommended)
      or test mode while you're first wiring things up.
   6. (Recommended) Set Firestore security rules so each user can only
      read/write their own document:

        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /users/{userId} {
              allow read, write: if request.auth != null && request.auth.uid == userId;
            }
            match /stats/{docId} {
              allow read: if true;
              allow write: if true; // page-view counter only — no personal data
            }
          }
        }

   Until you paste your real values below, the site still works fully
   as a guest (progress just won't be saved across visits) — it will
   never crash, it just shows a friendly message if someone tries to
   log in before this is configured.
   ============================================================ */

 const firebaseConfig = {
    apiKey: "AIzaSyBSM5TutGpif3Eh5ZWH9sUBTIe8lATTLew",
    authDomain: "studyquest-25e13.firebaseapp.com",
    projectId: "studyquest-25e13",
    storageBucket: "studyquest-25e13.firebasestorage.app",
    messagingSenderId: "593760678237",
    appId: "1:593760678237:web:d2de95b6b96219d02878b4",
    measurementId: "G-MBFE9MHPKD"
};


let firebaseReady = false;
let auth = null;
let db = null;

try {
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();
    firebaseReady = true;
  } else {
    console.warn("StudyQuest: Firebase config is still using placeholder values — login/cloud sync is disabled until js/auth/firebase-config.js is filled in with your real project keys.");
  }
} catch (e) {
  console.error("StudyQuest: Firebase failed to initialize.", e);
  firebaseReady = false;
}
