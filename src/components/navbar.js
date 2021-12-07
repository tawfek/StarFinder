import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from '../home'
// import './App.css';
import Contact from '../contact'
import Privacy from '../privacy'
import Howtouse from '../howtouse'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import {Col,Row, Drawer,Menu, Button,Icon } from 'antd';


loadProgressBar()

class Navbar extends Component {
  
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };

render() {

    var siteinfo =(<div>

<div>
    <Row className="white">
      <Col span={18} style={{padding:'10px',marginTop:"3vh"}} push={5}>
      </Col>
      <Col span={5} pull={18} style={{padding:'20px'}}>
      <Link  to="/home" >  <Icon className="logo-icon-sm" style={{color:"yellow"}} theme="filled" type="star"/> <span className="logo-text-sm">Star Finder</span> </Link>
      <br/> 
      
      </Col>
      <Col span={1} style={{marginTop:"3vh",position:"relative",right:"3vh"}}
      >
    <Button className="red" onClick={this.onClose} shape="circle" icon="close" size="small" />
      </Col>
    </Row>
  </div>
    </div>);

    return (
      <Router>
<div  className="trbody"></div>

        <nav className="menuBar">
          <div className="logo white">
           <Link className="white"  to="/home" >  <Icon className="logo-icon" theme="filled" style={{color:"yellow"}}  type="star"/> <span className="logo-text white">Star Finder</span> </Link>
          </div>
          <div  className="menuCon white" >
            <div className="leftMenu white" >

   <Menu  mode="horizontal" className="white">
       <Menu.Item key="home">
       <Link  to="/home" ><Icon type="home"  />Home</Link>
        </Menu.Item>
        <Menu.Item key="howtouse">
        <Link to="/howToUse" > <Icon type="question-circle"  />How to use?</Link>
        </Menu.Item>
        <Menu.Item key="contact">
        <Link to="/contact" ><Icon type="phone"  />Contact Us</Link>
        </Menu.Item>
        <Menu.Item key="privacy">
        <Link to="/privacy" ><Icon type="profile"  />Privacy</Link>
        </Menu.Item>

      </Menu>
      

      
            </div>
            <div className="rightMenu white" >
            </div>
            <Button className="barsMenu white"  onClick={this.showDrawer}>
              {/* <span className="barsBtn"></span> */}
              <Icon type="align-right" />
            </Button>
            <Drawer 
              placement="bottom"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
                {siteinfo}

                <Menu className="white" mode="horizontal">
       <Menu.Item  key="home">
       <Link  to="/home" ><Icon type="home"  />Home</Link>
        </Menu.Item>
        </Menu>
        <Menu className="white" mode="horizontal">
        <Menu.Item key="howtouse">
        <Link to="/howToUse" ><Icon type="question-circle"  />How to use?</Link>
        </Menu.Item>
        </Menu>
        <Menu className="white" mode="horizontal">
        <Menu.Item key="contact">
        <Link to="/contact" ><Icon type="phone"  />Contact Us</Link>
        </Menu.Item>
        </Menu>
        <Menu className="white" mode="horizontal">
        <Menu.Item key="privacy">
        <Link to="/privacy" ><Icon type="profile"  />Privacy</Link>
        </Menu.Item>
        </Menu>

            </Drawer>
</div>
        </nav>
        <Route path={"/"} exact component={Home} />
        <Route path={"/home"} exact component={Home} />
        <Route path={"/contact"}  component={Contact} />
        <Route path={"/privacy"}  component={Privacy} />
        <Route path={"/howtouse"}  component={Howtouse} />

        </Router>

    );
  }
}
export default Navbar;