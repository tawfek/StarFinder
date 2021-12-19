import React, { Component } from "react";
import { Tooltip, List, Icon } from "antd";
import {
  setShowDrawer,
  setPersonInformation,
  setIsPersonDataLoading,
  setPersonFullInformation,
} from "../store/actions/index";
import { connect } from "react-redux";
import axios from "axios";
function mapDispatchToProps(dispatch) {
  return {
    setShowDrawer: (value) => dispatch(setShowDrawer(value)),
    setPersonInformation: (value) => dispatch(setPersonInformation(value)),
    setIsPersonDataLoading: (value) => dispatch(setIsPersonDataLoading(value)),
    setPersonFullInformation: (value) =>
      dispatch(setPersonFullInformation(value)),
  };
}
function mapStateToProps(state) {
  return {
    celebrities: state.celebrities,
    imageUrl: state.imageUrl,
    personInformationData: state.personInformationData,
    showDrawer: state.showDrawer,
  };
}

class ListInformation extends Component {
  getPersonFullInformation = (celebrity) => {
    let person = celebrity;
    console.log(person);
    if (person !== null) {
      this.props.setIsPersonDataLoading(true);
      const url = `${process.env.REACT_APP_API_ENDPOINT}?wiki=${person.Urls[0]}`;
      axios
        .request({
          method: "get",
          url: url,
        })
        .then((response, t) => {
          this.props.setIsPersonDataLoading(false);
          this.props.setPersonFullInformation(response.data);
        });
    }
  };

  render() {
    let { celebrities, imageUrl } = this.props;

    return (
      <div>
        <List
          bordered
          style={{ overflow: "auto" }}
          dataSource={celebrities}
          renderItem={(celebrity) => {
            let face = celebrity.Face;
            let boundingBox = face.BoundingBox;
            let confidence = face.Confidence;
            let confidenceTextColor = "black";

            let CropFaceStyle = {
              borderRadius: 100,
              width: 50,
              height: 50,
              backgroundSize: `calc(600% / (${boundingBox.Width} * 10))`,
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: `calc(${boundingBox.Left * 100}% - 5px) ${
                boundingBox.Top * 100
              }%`,
            };

            switch (confidence) {
              case confidence <= 10:
                confidenceTextColor = "#f5222d";
                break;
              case confidence <= 50:
                confidenceTextColor = "#faad14";
                break;
              case confidence <= 85:
                confidenceTextColor = "#fa541c";
                break;
              default:
                confidenceTextColor = "#52c41a";
                break;
            }

            return (
              <List.Item key={celebrity.Id}>
                <List.Item.Meta
                  avatar={<div style={CropFaceStyle}></div>}
                  title={
                    <a
                      style={{
                        position: "relative",
                        top: celebrity.Urls !== undefined ? "0" : "15px",
                      }}
                      onClick={() => {
                        if (celebrity.Urls.length > 0) {
                          this.getPersonFullInformation(celebrity);
                          this.props.setShowDrawer(true);
                        }
                      }}
                      href="#!"
                    >
                      <Icon
                        theme="filled"
                        type="star"
                        style={{ color: "yellow" }}
                      />{" "}
                      {celebrity.Name}
                      <br></br>
                      {celebrity.Urls !== "" ? (
                        <small style={{ color: "lightgrey" }}>
                          Click to get info
                        </small>
                      ) : (
                        ""
                      )}
                    </a>
                  }
                />
                <Tooltip className="white" title="Accuracy ratio">
                  <b>
                    <div>
                      <span style={{ color: confidenceTextColor }}>
                        {Math.round(confidence)}
                      </span>
                      % <Icon type="info-circle" theme="filled" />
                    </div>
                  </b>
                </Tooltip>
              </List.Item>
            );
          }}
        ></List>
      </div>
    );
  }
}
const ListCelebrities = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListInformation);
export default ListCelebrities;
