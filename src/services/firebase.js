import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {collection, getDocs, query, where } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMeWhMlqMhECAinPzCLycT2i4fQxrIcjI",
  authDomain: "app-e-commerce-cursoreact-vega.firebaseapp.com",
  projectId: "app-e-commerce-cursoreact-vega",
  storageBucket: "app-e-commerce-cursoreact-vega.appspot.com",
  messagingSenderId: "789586947592",
  appId: "1:789586947592:web:e7a67462da53fe4960ebbd",
  measurementId: "G-PMMGP5VZZM"
};

const app = initializeApp(firebaseConfig)

export const database = getFirestore(app)

export const getProducts = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery = key && operator && value ?
    query(collection(database, 'items'), where(key, operator, value)) :
    collection(database, 'items')

    getDocs(collectionQuery).then(querySnapshot => {
      const products = querySnapshot.docs.map(doc =>{
        return { id: doc.id, ...doc.data()}
      })
      resolve(products)
    }).catch(err => {
      reject('Error obteniendo productos: ', err)
    })
  })
}

console.log(getProducts)