import React,{useState} from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {auth} from "../../components/firebase/firebase-config";

import {  onAuthStateChanged } from "firebase/auth";




export default function AuthStateChanged({ children }) {
	
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        
            if (!user) {
                setLoading(false);
            }   
        })
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	return children;
}



export function withProtectede(Component) {
	return function WithProtected() {
	
		const router = useRouter();
        onAuthStateChanged(auth, (user) => {
            
            if (!user) {
                router.replace("/Login");
                return <h1>Loading...</h1>;
            }
        })
		
		return <Component user={auth}  />;
	};
}