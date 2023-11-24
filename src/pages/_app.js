// pages/_app.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles/globals.css'; // Import global styles
import Header from '../components/Header'; // Import your custom Header component
import './styles/Home.module.css';  // Adjust the path based on your project structure
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
