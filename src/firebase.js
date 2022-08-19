import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const app = initializeApp({
    apiKey: "AIzaSyBx0ZARaoNh73_6jpPZSs6yjGJlHcCpOtI",
    authDomain: "auth-develop-f9943.firebaseapp.com",
    projectId: "auth-develop-f9943",
    storageBucket: "auth-develop-f9943.appspot.com",
    messagingSenderId: "404764707033",
    appId: "1:404764707033:web:e56f2b7313f661b7c596c8"


})


export const auth = getAuth(app);

export default app;