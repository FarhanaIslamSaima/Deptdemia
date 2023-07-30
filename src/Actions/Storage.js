import { db } from "../firebase";
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const app=initializeApp(db);
export const storage=getStorage(app);