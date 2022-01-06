import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBrg3ui5Icds2qrc9_WI2aYzeA2ePZnBXU",
  authDomain: "gig-pilot.firebaseapp.com",
  databaseURL: "https://gig-pilot-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
