import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBEcaXuWhv0zPS5zpnTkXCqw_xfyQlSrJo",
  authDomain: "newp-9b23d.firebaseapp.com",
  databaseURL: "https://newp-9b23d.firebaseio.com",
  projectId: "newp-9b23d",
  storageBucket: "newp-9b23d.appspot.com",
  messagingSenderId: "5457937209",
  appId: "1:5457937209:web:bf3a53620d0ad30e"
};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);