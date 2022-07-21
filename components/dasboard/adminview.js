import React, { useState ,useEffect} from 'react';
import Sidebar from "./adminview/sidebar";
import Header from "./adminview/header";
import logo from '../../public/administrador.png'
import Image from 'next/image';
import { onSnapshot, collection} from 'firebase/firestore';
import { db  }from "../firebase/firebase-config";
import { useRouter } from "next/router";
const AdminView = ({user}) => {
  const { push } = useRouter();
  const [usuario, setUsuarios] = useState([]);
  const [category, setCategoria] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    const docRef = collection(db , 'usuarios')
    onSnapshot(docRef,(snapshot)=>{
      const data = [];
      snapshot.forEach((doc) => {data.push({...doc.data(),id: doc.id,})
    })
    setUsuarios(data.length)
  })   
},[])
  
useEffect(() => {
  const docRef = collection(db, 'categoria')

  onSnapshot(docRef, (snapshot) => {
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id, })
    })
    setCategoria(data.length)
  })
}, [])
   
useEffect(() => { 
  const docRef = collection(db , 'proyectoss')
  onSnapshot(docRef,(snapshot)=>{
    const data = [];
    snapshot.forEach((doc) => {data.push({...doc.data(),id: doc.id,})
  })
  setProyectos(data.length)
})
  
},[])
  

const goCategoria = () => { 
  push("/dashboard/categoria");
};
const goUsuario = () => { 
  push("/dashboard/roles");
};

const goProyecto = () => { 
  push("/dashboard/proyectos");
};
  
  return ( 

      <>
<Header user={user}/>
    <Sidebar />
    
    <section className="contenedorcard">
      
  <div className="container">   
  <span className="titulopanel">Dashboard-Panel Administrativo</span>  
<div className="cardexistencia">
<div className="carddd text-white " style={{ width: '18rem',backgroundColor:'#61BCEA', marginLeft:'10px' }}>
<p className="card-text"style={{ marginLeft:'80px' }}>Productos</p>
    <div className="card-body">
        
        <p className="card-text" style={{ marginLeft:'130px' }}>{proyectos}</p>
    </div>
    <div className="card-footer" style={{ marginLeft:'100px' }} onClick={goProyecto}> Ver mas</div>
</div>


<div className="carddd text-white " style={{ width: '18rem',marginBottom:'20px',backgroundColor:'#EA8D61', marginLeft:'10px' }}>
<p className="card-text"style={{ marginLeft:'80px' }}>Categoría</p>
    <div className="card-body">
        
        <p className="card-text" style={{ marginLeft:'130px' }}>{category}</p>
    </div>
    <div className="card-footer" style={{ marginLeft:'100px' }} onClick={goCategoria}> Ver mas</div>
</div>

<div className="carddd text-white " style={{ width: '18rem',marginBottom:'20px',backgroundColor:'#61EA87',marginLeft:'10px' }}>
<p className="card-text"style={{ marginLeft:'80px' }}>Usuarios</p>
    <div className="card-body">
        
        <p className="card-text" style={{ marginLeft:'130px' }}>{usuario}</p>
    </div>
    <div className="card-footer" style={{ marginLeft:'100px' }} onClick={goUsuario}> Ver mas</div>
</div>
</div>
<Image 
            src={logo}
            alt="logo"
            width="220px"
            height="220px" />

   <span className="textpanel">Bienvenido Al Panel Administrativo</span>
  </div>
</section>

      </>
   
     );
}
 
export default AdminView;