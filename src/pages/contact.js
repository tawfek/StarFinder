import React, { Component, Fragment } from "react";
import Header from "../components/header";
import { Helmet } from "react-helmet";
import { Row, Col, Button, Icon } from "antd";
class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Contact us | Starfinder</title>
          <meta name="og:title" content="Contact | Starfinder.me" />
        </Helmet>
        <Row type="flex" justify="center" style={{ marginBottom: "15vh" }}>
          <Header />
          <Col
            style={{ position: "relative", top: "3vh" }}
            className="bshadow white"
            xs={24}
            sm={24}
            md={23}
            lg={20}
            xl={19}
          >
            <Row>
              <Col style={{ height: "100%", padding: "10px 20px" }} sm={24}>
                <h1 className="pfont">
                  <Icon type="phone" theme="filled" /> Contact us
                </h1>
                <br />
                let's talk on Facebook, telegram and email For any further
                information or questions :<br></br>
                <a
                  href="https://fb.com/t200o"
                  target="_blank"
                  rel=" noopener noreferrer nofollow "
                >
                  <Button
                    style={{
                      background: "#3B5998",
                      border: 0,
                      margin: 10,
                      color: "white",
                    }}
                  >
                    <Icon theme="filled" type="facebook" />
                    facebook
                  </Button>
                </a>
                <a
                  href="https://t.me/tawfekmohammed"
                  target="_blank"
                  rel="noreferrer noopener  nofollow "
                >
                  <Button
                    style={{
                      background: "#179CDE",
                      border: 0,
                      margin: 10,
                      color: "white",
                    }}
                  >
                    <Icon type="message" /> Telegram
                  </Button>
                </a>
                <a
                  href="mailto:tawfekaltaae3@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener  nofollow "
                >
                  <Button
                    style={{
                      background: "#FF4343",
                      border: 0,
                      margin: 10,
                      color: "white",
                    }}
                  >
                    <Icon type="mail" />
                    E-mail
                  </Button>
                </a>
                <br />
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default Contact;
