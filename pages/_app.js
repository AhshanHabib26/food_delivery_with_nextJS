import '../styles/globals.css'
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from 'react';

// AOS Documnet Is Not Found Error Fixed

function MyApp({ Component, pageProps }){

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  }, [])



  return <Component {...pageProps} />
}

export default MyApp
