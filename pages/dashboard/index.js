import React from 'react'


import Dasboard from '../../components/dasboard/dasboard';





function Index() {
 


    return (
<Dasboard/>
    );
  }
  
  export default Index;















/*

import React from 'react'


import Dasboard from '../../components/dasboard/dasboard';

import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react'
import AuthContext from '../../store/auth.context'
function Index({children}) {
    const {user, loading} = useContext(AuthContext);
    const router = useRouter();
    
    useEffect(() => {
      if(user && !loading && router.pathname === '/') {
        router.push('/');
      }
    
    }, [loading]);
    
    console.log(user)

    if(user && !loading && router.pathname !== '/') {
      return children;
    }
    else if (!user && !loading) {
      return <Dasboard/> ;
    }else {
      return <h1>Loading...</h1>;
    }
}

export default Index */