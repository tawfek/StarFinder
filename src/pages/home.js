import React, { Component, Fragment } from "react";
import { Skeleton, Col, Row, message, Upload, Progress, Icon } from "antd";
import ListCelebrities from "../components/List"
import PersonInformation from "../components/PersonInformation"
import BoundingBox from "../components/BoundingBox";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import { connect } from "react-redux";
import {setCelebrities, setPersonInformation,setImageUrl,setIsUploading, setLoadingProgress} from "../store/actions/index"
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
function CheckFile(file) {
  const allowedTypes =
    file.type === "image/png"
      ? file.type === "image/png"
      : file.type === "image/jpeg";
  if (!allowedTypes) {
    message.error("You can only upload JPG and PNG file!");
  }

  const FileMaxSize = file.size / 1024 / 1024 <= 5;
  if (!FileMaxSize) {
    message.error("Image must smaller than 5MB");
  }
  return allowedTypes && FileMaxSize;
}



function mapDispatchToProps(dispatch) {
  return {
    setCelebrities: value => dispatch(setCelebrities(value)),
    setPersonInformation : value => dispatch(setPersonInformation(value)),
    setImageUrl : url=>dispatch(setImageUrl(url)),
    setIsUploading : value => dispatch(setIsUploading(value)),
    setLoadingProgress: progress => dispatch(setLoadingProgress(progress)),
  };
}
function mapStateToProps(state){
  return {
    loadingProgress:state.loadingProgress,
    imageUrl:state.imageUrl,
    celebrities:state.celebrities,
    isUploading:state.isUploading
  }
}

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  getProps = this.props

  handleChange = (r) => {
    let _ = this
    let file = r.file;
    let response = file.response;
    this.getProps.setCelebrities(null)
    this.getProps.setPersonInformation(null)
    this.getProps.setImageUrl(null) ;
    
    

    if (file.status === "uploading") {
      this.getProps.setIsUploading(true)
      return;
    }
    if (file.status === "error") {
      message.error(
        "Please try again,An unexpected error hapend while uploading!check you internet connection."
      );
      this.getProps.setIsUploading(false)
    }
    if (file.status === "done") {
      if (response.errors !== undefined && response.errors.length < 1) {
        _.getProps.setIsUploading(false) ;
        if (
          response.faces_detected !== undefined &&
          response.faces_detected > 0
        ) {
          _.getProps.setCelebrities(response.data) ;
          getBase64(file.originFileObj, (imageUrl) => {
            _.getProps.setImageUrl(imageUrl) ;
          });
        } else {
          message.warning("Sorry no celebrities found in the photo!");
          this.getProps.setIsUploading(false) ;

        }
      } else {
        if (response.errors !== undefined) {
          var errors = response.errors;
          errors.map((error) => {
            return message.error(error);
          });
        } else {
          message.error(
            "Please try agin,An unexpected error hapend while uploading!"
          );
        }
        this.getProps.setIsUploading(false) ;
      }
    }
  };


  handleProgress = (request) => {
    this.getProps.setLoadingProgress(request.percent)
  };
  
  render() {
    
    let storeState = this.props
    let {loadingProgress,celebrities,imageUrl,isUploading} = storeState;
    const uploadButton = (
      <div>
        {!isUploading  ? (
          <Icon
            style={{ fontSize: "5vh" }}
            type={isUploading ? "loading" : "upload"}
            spin={isUploading ? true : false}
          />
        ) : (
          <Progress
            type="circle"
            style={{ color: "white" }}
            percent={Math.round(loadingProgress)}
            width={50}
          />
        )}
        <div className="ant-upload-text">
          {isUploading
            ? loadingProgress < 100
              ? "Uploading..."
              : "Analysing..."
            : "Select or drop photo here "}
        </div>
      </div>
    );

    return (
      <Fragment>
        <Helmet>
          <title>
            Star Finder - Best AI to detect celebrities from picture
          </title>
          <meta
            name="og:title"
            content="Star Finder - Best AI to detect celebrities from picture "
          />
        </Helmet>

        <div style={{ marginBottom: "10em" }}>
          <Row type="flex" justify="center">
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
                <Col
                  style={{ height: "100%" }}
                  sm={24}
                  md={
                    isUploading || celebrities !== null
                      ? 10
                      : 24
                  }
                >
                  <Upload
                    disabled={isUploading ? true : false}
                    name="img"
                    listType="picture-card"
                    className="avatar-uploader white"
                    showUploadList={false}
                    action={`${process.env.REACT_APP_API_ENDPOINT}?rekognition`}
                    onProgress={this.handleProgress}
                    beforeUpload={CheckFile}
                    onChange={this.handleChange}
                  >
                    {imageUrl ? (
                      <BoundingBox
                        src={imageUrl}
                        data={celebrities}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </Col>

                {isUploading ? (
                  <Col
                    sm={24}
                    md={13}
                    className="white"
                    style={{ padding: "10px", paddingBottom: 0 }}
                  >
                    <Skeleton
                      active
                      className="white"
                      avatar
                      paragraph={{ rows: 2 }}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {celebrities !== null ? (
                  <Col
                    sm={24}
                    md={13}
                    className="white"
                    style={{ padding: "10px" }}
                  >
                    <ListCelebrities />
                    <PersonInformation/>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;
