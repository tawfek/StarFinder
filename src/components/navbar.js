import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Privacy from "../pages/privacy";
import Howtouse from "../pages/howtouse";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import { Col, Row, Menu, Icon } from "antd";

loadProgressBar();

class Navbar extends Component {
 

  render() {
    

    return (
      <Router>
        <div className="trbody"></div>
        <nav className="menuBar">
          <Row align="middle" justify="center" className="mobile-menu">
            <Link to={`/home`}>
              <Col span={6}>
                <Icon type="home" />
              </Col>
            </Link>
            <Link to={`/howToUse`}>
              <Col span={6}>
                <Icon type="question-circle" />
              </Col>
            </Link>
            <Link to={`/contact`}>
              <Col span={6}>
                <Icon type="phone" />
              </Col>
            </Link>
            <Link to={`/privacy`}>
              <Col span={6}>
                <Icon type="profile" />
              </Col>
            </Link>
          </Row>
          <Menu mode="horizontal" className="desktop-menu">
            <Menu.Item key="home">
              <Link to={`/home`}>
                <Icon type="home" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="howtouse">
              <Link to={`/howToUse`}>
                {" "}
                <Icon type="question-circle" />
                How to use?
              </Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to={`/contact`}>
                <Icon type="phone" />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item key="privacy">
              <Link to={`/privacy`}>
                <Icon type="profile" />
                Privacy
              </Link>
            </Menu.Item>
          </Menu>
        </nav>
       
        <Route path={`/`} exact component={Home} />
        <Route path={`/home`} exact component={Home} />
        <Route path={`/contact`} component={Contact} />
        <Route path={`/privacy`} component={Privacy} />
        <Route path={`/howtouse`} component={Howtouse} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Router>
    );
  }
}
export default Navbar;
