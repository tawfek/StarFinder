import React, { Component } from "react";
import { Button, Tooltip } from "antd";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    celebrities: state.celebrities,
  };
}
class BoundingBoxComponent extends Component {
  render() {
    const data = this.props.celebrities;
    let BoundingBoxs;
    if (data !== null) {
      BoundingBoxs = data.map((item, i) => {
        let face = item.Face.BoundingBox;
        return (
          <Tooltip placement="bottom" title={item.Name} key={i}>
            <span
              style={{
                boxShadow: "0 0 10px #a3a3a3",
                borderRadius: 4,
                width: `${100 * face.Width}%`,
                height: `${face.Height * 100}%`,
                position: "absolute",
                left: `${face.Left * 100}%`,
                top: `${face.Top * 100}%`,
                border: "3px solid #efefef",
              }}
              className={`face-${i}`}
            ></span>
          </Tooltip>
        );
      });
    }
    return (
      <div style={{ position: "relative" }}>
        <div className="ant-card ant-card-hoverable">
          <div className="ant-card-cover">
            <img
              id="facebox-image"
              className="uped"
              alt="Uploaded"
              src={this.props.src}
            />
            <Button
              type="primary"
              className="anotherbutton"
              shape="circle"
              icon="upload"
            >
              Click To select another photo
            </Button>
          </div>
        </div>
        {BoundingBoxs}
      </div>
    );
  }
}
const BoundingBox = connect(mapStateToProps)(BoundingBoxComponent);
export default BoundingBox;
