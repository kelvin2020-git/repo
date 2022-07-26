import React,{useState} from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import firebaseApp from "../../components/firebase/firebase-config";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

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