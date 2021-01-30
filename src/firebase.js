import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyA09Mu6nCuvdX_O8UlJsTNPkG9RZq_J5FU",
    authDomain: "mpft-c5032.firebaseapp.com",
    projectId: "mpft-c5032",
    storageBucket: "mpft-c5032.appspot.com",
    messagingSenderId: "990212462139",
    appId: "1:990212462139:web:95e19477f17dd4b46b2e1e",
    measurementId: "G-VTYNVWJEES"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
