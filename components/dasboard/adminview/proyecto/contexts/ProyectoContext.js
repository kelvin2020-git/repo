import React, { useState, createContext, useEffect} from 'react';
import { db  }from "../../../../firebase/firebase-config";
export const ProyectoContext = createContext()
import { onSnapshot, collection } from 'firebase/firestore';
const ProyectoContextProvider  = (props) => {
  const [proyectos, setProyectos] = useState([]);
  




  
    useEffect(() => { 
      const docRef = collection(db , 'proyectoss')
      onSnapshot(docRef,(snapshot)=>{
        const data = [];
        snapshot.forEach((doc) => {data.push({...doc.data(),id: doc.id,})
      })
      setProyectos(data)
      
    })
      
  },[])
useEffect(()=> {
  setProyectos(JSON.parse(localStorage.getItem('proyecto')))
},[])

useEffect(() => {
    localStorage.setItem('proyecto', JSON.stringify(proyectos));
})





const sortedProyecto = proyectos.sort((a,b)=>(a.nombre < b.nombre ? -1 : 1));



    return (
        <ProyectoContext.Provider value={{sortedProyecto}}>
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoContextProvider;