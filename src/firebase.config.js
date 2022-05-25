import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDwP1rIaZ-45i5RJoln4B8U-iIJlsnbiZY",
  authDomain: "resturrantapp.firebaseapp.com",
  databaseURL: "https://resturrantapp-default-rtdb.firebaseio.com",
  projectId: "resturrantapp",
  storageBucket: "resturrantapp.appspot.com",
  messagingSenderId: "29014043129",
  appId: "1:29014043129:web:e74e62ae2312d1358a3528",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app)

export {app, firestore, storage}