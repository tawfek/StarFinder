import React, { Component, Fragment } from "react";
import { Switch, Col, Row, Icon, Card } from "antd";
import { connect } from "react-redux";
import { enableDarkTheme } from "../store/actions/index";

function mapStateToProps(state) {
  return {
    darkTheme: state.darkTheme,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableDarkTheme: (theme) => dispatch(enableDarkTheme(theme)),
  };
}
class HeaderComponent extends Component {
  render() {
    let { darkTheme, enableDarkTheme } = this.props;

    const handleSwitch = (e) => {
      enableDarkTheme(Boolean(e));
    };
    const MoonS = () => (
      <svg viewBox="0 0 50 50" width="2em" height="2em" fill="currentColor">
        <path d="M 16 6 C 15.448 6 15 6.448 15 7 L 15 8 L 14 8 C 13.448 8 13 8.448 13 9 C 13 9.552 13.448 10 14 10 L 15 10 L 15 11 C 15 11.552 15.448 12 16 12 C 16.552 12 17 11.552 17 11 L 17 10 L 18 10 C 18.552 10 19 9.552 19 9 C 19 8.448 18.552 8 18 8 L 17 8 L 17 7 C 17 6.448 16.552 6 16 6 z M 28.3125 12.96875 L 27 13.15625 C 20.156 14.13525 15 20.087 15 27 C 15 34.72 21.28 41 29 41 C 35.911 41 41.86275 35.845 42.84375 29 L 43.03125 27.6875 L 41.71875 27.875 C 41.05975 27.969 40.51 28 40 28 C 33.383 28 28 22.617 28 16 C 28 15.49 28.032 14.93925 28.125 14.28125 L 28.3125 12.96875 z M 8 18 C 7.448 18 7 18.448 7 19 C 6.448 19 6 19.448 6 20 C 6 20.552 6.448 21 7 21 C 7 21.552 7.448 22 8 22 C 8.552 22 9 21.552 9 21 C 9.552 21 10 20.552 10 20 C 10 19.448 9.552 19 9 19 C 9 18.448 8.552 18 8 18 z" />
      </svg>
    );

    const sun = () => (
      <svg viewBox="0 0 50 50" width="2em" height="2em" fill="currentColor">
        <path
          d="M 15.90625 5.96875 A 1.0001 1.0001 0 0 0 15.78125 6 A 1.0001 1.0001 0 0 0 15 7 L 15 8 L 14 8 A 1.0001 1.0001 0 0 0 13.90625 8 A 1.001098 1.001098 0 0 0 14 10 L 15 10 L 15 11 A 1.0001 1.0001 0 1 0 17 11 L 17 10 L 18 10 A 1.0001 1.0001 0 1 0 18 8 L 17 8 L 17 7 A 1.0001 1.0001 0 0 0 15.90625 5.96875 z M 28.3125 12.96875 L 27 13.15625 C 20.21841 14.126433 15 19.95749 15 27 C 15 34.72039 21.27961 41 29 41 C 36.04251 41 41.87146 35.781264 42.84375 29 L 43.03125 27.6875 L 41.71875 27.875 C 41.137355 27.956281 40.566552 28 40 28 C 33.36039 28 28 22.63961 28 16 C 28 15.433448 28.04375 14.861453 28.125 14.28125 L 28.3125 12.96875 z M 26.03125 15.53125 C 26.024491 15.690536 26 15.837149 26 16 C 26 23.72039 32.27961 30 40 30 C 40.162851 30 40.309456 29.97551 40.46875 29.96875 C 39.129599 35.131255 34.591587 39 29 39 C 22.36039 39 17 33.63961 17 27 C 17 21.408413 20.868999 16.869021 26.03125 15.53125 z M 7.90625 17.96875 A 1.0001 1.0001 0 0 0 7.78125 18 A 1.0001 1.0001 0 0 0 7 19 A 1.0001 1.0001 0 0 0 6.90625 19 A 1.001098 1.001098 0 0 0 7 21 A 1.0001 1.0001 0 1 0 9 21 A 1.0001 1.0001 0 1 0 9 19 A 1.0001 1.0001 0 0 0 7.90625 17.96875 z"
          overflow="visible"
          enableBackground="accumulate"
          fontFamily="Bitstream Vera Sans"
        />
      </svg>
    );

    const Moon = (props) => <Icon component={MoonS} {...props} />;

    const Sun = (props) => <Icon component={sun} {...props} />;
    return (
      <Fragment>
        <Col className="white" xs={24} sm={24} md={23} lg={20} xl={19}>
          <Row align="middle" justify="center">
            <Card className="white">
              <Col xs={24} sm={24} md={5}>
                <div
                  className="card-define white biglogo"
                  style={{ width: "100%" }}
                >
                  <span style={{ fontSize: "1.8rem", position: "relative" }}>
                    <Icon
                      theme="filled"
                      type="star"
                      style={{ color: "yellow" }}
                    />{" "}
                    Star Finder{" "}
                  </span>
                  <br />
                  <div className="swch" style={{ textAlign: "center" }}>
                    <Switch
                      style={{ textAlign: "center" }}
                      onChange={handleSwitch}
                      checkedChildren={<Moon />}
                      unCheckedChildren={<Sun />}
                      defaultChecked={Boolean(darkTheme)}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={19}>
                <div className="card-define">
                  the best way to Find and detect celebrities,actors and famous
                  people in the glob from picture online, get full
                  information,movies and actors from the picture. free to use.
                </div>{" "}
              </Col>
            </Card>
          </Row>
        </Col>
      </Fragment>
    );
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default Header;
