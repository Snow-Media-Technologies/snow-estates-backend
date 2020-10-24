const functions = require('firebase-functions');
const admin = require('firebase-admin');
const dotenv = require("dotenv");
const firebase = require('firebase')
const algoliasearch = require('algoliasearch')

dotenv.config()

// -----------------------------------------------------------------------------
// Firebase
// -----------------------------------------------------------------------------
console.log('gggggg', process.env.APP_APP_ID)
const firebaseConfig = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  databaseURL: process.env.APP_DATABASE_URL,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
  appId: process.env.APP_APP_ID,
  measurementId: process.env.APP_MEASUREMENT_ID
}

const __firebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const auth = firebase.auth()
const __firestore = firebase.firestore()
// module.exports = {   }
// -----------------------------------------------------------------------------
// Algolia
// -----------------------------------------------------------------------------
const client = algoliasearch(
  process.env.APP_ALGOLIA_APP_ID,
  process.env.APP_ALGOLIA_ADMIN_API_KEY
)

const __algoliaSearch = client.initIndex(process.env.APP_ALGOLIA_INDEX)

module.exports = { __algoliaSearch, auth, __firestore, __firebase, }

