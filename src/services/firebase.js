// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs, doc,
    getDoc,
    query,
    where,
    addDoc,
    // writeBatch,
    // documentId,
} from 'firebase/firestore'

import { products } from '../mockAPI/mockAPI'

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

export const firebaseCreateBuyOrder = async (orderData) => {

    try {
        const collectionRef = collection(db, 'orders')
        const newOrder = await addDoc(collectionRef, orderData)
        return newOrder.id

    } catch (error) {
        return error
    }
}

// With stock control
// export const firebaseCreateBuyOrder = async (orderData) => {

//     try {
//         console.log('Order to add: ',orderData)

//         const batch = writeBatch(db)

//         const ordersRef = collection(db, 'orders')
//         const productsRef = collection(db, 'products')

//         const arraysId = orderData.cart.map((item) => item.id)

//         const q = query(productsRef, where(documentId(), 'in', arraysId ))

//         const itemsToUpdate = await getDocs(q)

//         itemsToUpdate.docs.forEach( (doc) => {
//             const intemInCart = orderData.cart.find( item => item.id === doc.id)
//             batch.update(doc.ref, {
//                 stock: doc.data().stock - intemInCart.count
//             })
//         })
//         batch.commit()

//         const newOrder = await addDoc(ordersRef, orderData)

//         return newOrder.id

//     } catch (error) {
//         return error
//     }
// }

export const firebaseGetBuyOrder = async (id) => {

    try {
        const docRef = doc(db, 'orders', id)
        const order = await getDoc(docRef)
        if (order.exists())
            return { id: order.id, ...order.data() }
        else
            throw new Error('Order not found')
    } catch (error) {
        return error
    }
}

export const sendDataToFirebase = async () => {
    try {
        const collectionRef = collection(db, 'products')

        for ( let product of products ) {
            delete product.id
            const newDoc = await addDoc(collectionRef, product)
            console.log(newDoc.id)
        }

    } catch (error) {
        return error
    }
}

export default firebaseApp


