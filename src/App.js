import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
import Navbar from './components/navbar'
import {Helmet} from "react-helmet";
import './App.css'


function App() {
  const cookies = new Cookies();
  const theme = cookies.get('theme')
   if(theme===undefined){
     cookies.set('theme', 'light', { path: '/' });
  } 
  return (<Fragment>
    <Helmet>


 {
  (theme==="dark")? (<link rel="stylesheet" href={`/Dark.css`} />):''
 }

</Helmet>
 <Navbar/>

  </Fragment>
   
  );
}

export default App;
