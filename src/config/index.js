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


// const data = {
//     'Size of farm': '0.7 acres',
//   'Street Address': 'Kigwaru Garden Dr Kitisuru, Runda',
//   address: 'Kigwaru Garden Dr Kitisuru, Runda, Nairobi',
//   property_info: [ { held: [{ 
//       Bathroom : 8,
//       Bedroom : 4,
//       Garage : 2,
//       Garden : true
//   }] } ],
//   Parking: true,
//   images: [
//     'https://images.prop24.com/dwwg6pfcu5gc7x3qkyl2fdflnm/Crop676x507',
//     'https://images.prop24.com/jhn4zbh36zulu5g2eocsnw4olm/Crop676x507',
//     'https://images.prop24.com/txt5zsm2t4qdum4twmuoqshtty/Crop676x507',
//     'https://images.prop24.com/bwauex3oewfafezb6ynjmyabyy/Crop676x507',
//     'https://images.prop24.com/jawecltyz23wenw37p3ldlie6m/Crop676x507',
//     'https://images.prop24.com/lzaq64dhymvml3grssj6vvcj5e/Crop676x507',
//     'https://images.prop24.com/h5t7njgypl36cm7vlur3ahz4i4/Crop676x507',
//     'https://images.prop24.com/p7yssen5ljeozplhd22ghrea6q/Crop676x507'
//   ],
//   district: 'Nairobi',
//   'Type of Property': 'Farm',
//   title: 'Farm for sale in Runda',
//   property_details: 'Runda house 7 bedroom for sale on 1/2(0.7) ACRERUNDA HOUSE 7 BEDROOM FOR SALE ON 1/2 ACRELocated in Runda Next to Mimosa and walking distance to Two Rivers, 5 km to the UN, and close to Village Market, and to all the main schools including ISK, German School and Peponi House.PLOT: The plot is flat and rectangular in shape, slightly more than half an acre(0.6 acre).CONSTRUCTION: The house is built of stone block walls. Windows are pvc casements. Floors are solid wood with ceramic tiles in the bathrooms and kitchen.ACCOMMODATION;GROUND FLOOR;Sitting room with fireplace and double doors to Verandah and TVDining roomBreakfast kitchen with doors to verandahGuest Room with en-suite shower and TVSecond bedroom en-suiteVerandah with fireplaceSECOND FLOOR;Sitting Room with fireplace and double doors to balcony and with fireplace 3 bedrooms en-suite, each with a dressing room and stairs to attic room THIRD FLOOR;Master bedroom en-suite with bath, basin and shower. Doors to balcony. Double dressing room and a study room that opens to balconyEXTERNAL;Private gardenTwo dsqDouble Car portBoundary Wall with Electric Fencing24 hour securityBoreholeCctv camerasAlarm systemPrice: 78 Million Negotiable. .Contact Kevin; 0705536431/0799933707 Offers are welcome',
//   uuid: 'ae0e8f560c1f4efc91572faf9368f03e',
//   'Pets Allowed': true,
//   price: [ { value: '78000000', currency: 'RFW' } ]
// }
