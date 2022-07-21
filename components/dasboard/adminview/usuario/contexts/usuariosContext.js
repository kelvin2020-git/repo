import React, { useState, createContext, useEffect} from 'react';
import { db  }from "../../../../firebase/firebase-config";
export const UsuarioContext = createContext()
import { onSnapshot, collection} from 'firebase/firestore';
const UsuariosContextProvider  = (props) => {
  const [usuario, setUsuarios] = useState([]);
    useEffect(() => {
       
      const docRef = collection(db , 'usuarios')

    
      onSnapshot(docRef,(snapshot)=>{
        const data = [];
        snapshot.forEach((doc) => {data.push({...doc.data(),id: doc.id,})
      })
      setUsuarios(data)
    })
      
  },[])
useEffect(()=> {
  setUsuarios(JSON.parse(localStorage.getItem('user')))
},[])

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(usuario));
})





const sortedUsuarios = usuario.sort((a,b)=>(a.nombre < b.nombre ? -1 : 1));



    return (
        <UsuarioContext.Provider value={{sortedUsuarios}}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuariosContextProvider;