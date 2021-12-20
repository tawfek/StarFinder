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
            <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/home`}>
              <Col span={6}>
                <Icon type="home" />
              </Col>
            </Link>
            <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/howToUse`}>
              <Col span={6}>
                <Icon type="question-circle" />
              </Col>
            </Link>
            <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/contact`}>
              <Col span={6}>
                <Icon type="phone" />
              </Col>
            </Link>
            <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/privacy`}>
              <Col span={6}>
                <Icon type="profile" />
              </Col>
            </Link>
          </Row>
          <Menu mode="horizontal" className="desktop-menu">
            <Menu.Item key="home">
              <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/home`}>
                <Icon type="home" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="howtouse">
              <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/howToUse`}>
                {" "}
                <Icon type="question-circle" />
                How to use?
              </Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/contact`}>
                <Icon type="phone" />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item key="privacy">
              <Link to={`${process.env.REACT_APP_GT_REPO_NAME}/privacy`}>
                <Icon type="profile" />
                Privacy
              </Link>
            </Menu.Item>
          </Menu>
        </nav>
        <Route path={`${process.env.REACT_APP_GT_REPO_NAME}`} exact component={Home} />
        <Route path={`${process.env.REACT_APP_GT_REPO_NAME}/home`} exact component={Home} />
        <Route path={`${process.env.REACT_APP_GT_REPO_NAME}/contact`} component={Contact} />
        <Route path={`${process.env.REACT_APP_GT_REPO_NAME}/privacy`} component={Privacy} />
        <Route path={`${process.env.REACT_APP_GT_REPO_NAME}/howtouse`} component={Howtouse} />
      </Router>
    );
  }
}
export default Navbar;
