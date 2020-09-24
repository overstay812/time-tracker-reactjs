import * as firebase from 'firebase/app'
import 'firebase/firestore'



var firebaseConfig = {
    apiKey: "AIzaSyA0oOaPQbUteqjWymT1-Pa4PJA18xBgNMo",
    authDomain: "timetracker-59467.firebaseapp.com",
    databaseURL: "https://timetracker-59467.firebaseio.com",
    projectId: "timetracker-59467",
    storageBucket: "timetracker-59467.appspot.com",
    messagingSenderId: "191507876176",
    appId: "1:191507876176:web:fb0f3f3291e8baa0344455",
    measurementId: "G-E28R709H9L"
  }

  export let fire = firebase.initializeApp(firebaseConfig)