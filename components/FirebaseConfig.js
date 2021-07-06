import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCTCNodC0G1Z8IwiIr4F5fpYAWPqUsCfN8",
  authDomain: "test-110a1.firebaseapp.com",
  projectId: "test-110a1",
  storageBucket: "test-110a1.appspot.com",
  messagingSenderId: "401144012022",
  appId: "1:401144012022:web:954de60929c3d3b17020d7"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
export default firebase.storage();