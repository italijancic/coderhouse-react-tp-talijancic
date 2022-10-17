// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs, doc,
    getDoc,
    query,
    where,
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxmH2V6gIv5IYH7llxgxgWMrIwn9ILOW0",
    authDomain: "applereconquista-a20a7.firebaseapp.com",
    projectId: "applereconquista-a20a7",
    storageBucket: "applereconquista-a20a7.appspot.com",
    messagingSenderId: "555757430338",
    appId: "1:555757430338:web:a862f5272a79e2121e2fdb"
}

// Initialize Firebase and Firestore
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export const firebaseGetProducts = async () => {

    try {
        const collectionRef = collection(db, 'products')
        const products = await getDocs(collectionRef)

        return products.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
    } catch (error) {
        return error
    }

}

export const firebaseGetProduct = async (id) => {

    try {
        const docRef = doc(db, 'products', id)
        const product = await getDoc(docRef)
        if (product.exists())
            return { id: product.id, ...product.data() }
        else
            throw new Error('Product not found')
    } catch (error) {
        return error
    }
}

export const firebaseGetProductsByCategory = async (category) => {

    try {
        const collectionRef = collection(db, 'products')
        const queryCat = query(collectionRef, where('category', '==', category))
        const products = await getDocs(queryCat)

        return products.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })

    } catch (error) {
        return error.message
    }

}

export default firebaseApp


