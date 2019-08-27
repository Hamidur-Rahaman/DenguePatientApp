import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyAnr82o7ejKUjIKlVchtHoAdR5EUcgc5Zk",
  authDomain: "denguesurvey.firebaseapp.com",
  databaseURL: "https://denguesurvey.firebaseio.com",
  projectId: "denguesurvey",
  storageBucket: "",
  messagingSenderId: "684195751044",
  appId: "1:684195751044:web:7a682a93cedfca99"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
