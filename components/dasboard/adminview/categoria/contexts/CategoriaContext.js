import React, { useState, createContext, useEffect } from 'react';
import {db} from "../../../../firebase/firebase-config";
export const CategoryContext = createContext()
import { onSnapshot, collection } from 'firebase/firestore';
const CategoryContextProvider = (props) => {
  
  const [category, setCategoria] = useState([]);
  useEffect(() => {
    const docRef = collection(db, 'categoria')
 
    onSnapshot(docRef, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id, })
      })
      setCategoria(data)
    
    })

  }, [])

  const sortedCategory = category.sort((a, b) => (a.nombre < b.nombre ? -1 : 1));
  return (
    <CategoryContext.Provider value={{ sortedCategory}}>
      {props.children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider;