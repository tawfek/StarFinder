import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import Navbar from './components/navbar'
import {Helmet} from "react-helmet";
import {connect} from "react-redux"
import './App.css'

function mapStateToProps(state){
  return {
  darkTheme:state.darkTheme
  }
}

function Application(props) {
  const {darkTheme} = props
  return (<Fragment>
    <Helmet>
 {
  (darkTheme)? (<link rel="stylesheet" href={`/Dark.css`} />):''
 }

</Helmet>
 <Navbar/>
  </Fragment>
   
  );
}

const App = connect(mapStateToProps,{})(Application)

export default  App;
