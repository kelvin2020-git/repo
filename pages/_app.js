

import Head from 'next/head'

import '../styles/globals.css'
import { AuthContextProvider } from '../store/auth.context';


function MyApp({ Component, pageProps }) {


  return (
    <>
    <AuthContextProvider>
    <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1"/>

      </Head>
      <Component {...pageProps} />
  
      </AuthContextProvider>
      </>
  );
}

export default MyApp;