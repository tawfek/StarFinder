import React, { Component, Fragment } from "react";
import Header from "../components/header";
import { Helmet } from "react-helmet";
import {  Alert, Row, Col, Timeline, Icon } from "antd";
class Howtouse extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>How to use | Starfinder</title>
          <meta name="og:title" content="How to use? | Starfinder" />
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
              <Col style={{ height: "100%", padding: 15 }} sm={24}>
                <h1 className="pfont">
                  <Icon theme="filled" type="question-circle" /> How to use &
                  how it works ?
                </h1>
                <br />
                <span className="pbold"> 1. </span> First you should select a
                photo by clicking in the select box, or drag & drop your picture
                inside the box.<br></br>
                <span className="pbold"> 2. </span>we have rules for the picture
                that will be uploaded before you select it :
                <Timeline style={{ paddingLeft: 20, paddingTop: 10 }}>
                  <Timeline.Item>
                    Picture type must be (png, JPEG).
                  </Timeline.Item>
                  <Timeline.Item>
                    Picture size must be equal or less 4Mb.
                  </Timeline.Item>
                  <Timeline.Item>
                    The face inside the picture should be more than (50x50)px to
                    recognize.
                  </Timeline.Item>
                  <Timeline.Item>
                    Not all celebrate can be recognized depending on photo
                    quilty.
                  </Timeline.Item>
                </Timeline>
                <img
                  alt="How to use"
                  className="htuimg"
                  style={{ paddingBottom: 10 }}
                  src="/images/howtouse/htu.jpg"
                />
                <span className="pbold"> 3. </span> After you selected the
                picture we will be processing it. The process will not take time
                just in case there are too many faces to recognize.<br></br>
                ~The process takes two parts :<br></br>
                <Timeline style={{ paddingLeft: 20, paddingTop: 10 }}>
                  <Timeline.Item>
                    <b>Uploading :</b> The uploading process will not take time
                    to depend on your internet connection & the server speed &
                    bandwidth. We do not store any picture in the server we push
                    the picture directly to the analyzing process (on the fly).
                  </Timeline.Item>
                  <Timeline.Item>
                    <b>Analyzing :</b> Analyzing process may take time to depend
                    on how many faces that the server recognizes. we use{" "}
                    <b>Amazon (aws)</b> to Recognizing celebrities.
                  </Timeline.Item>
                </Timeline>
                <img
                  alt="uploading proccess"
                  className="htuimg"
                  style={{ paddingBottom: 10 }}
                  src="/images/howtouse/uploading.jpg"
                />
                <br></br>
                <br></br>
                <Alert
                  message={
                    <div>
                      <img
                        alt="AWS"
                        style={{ width: 40, background: "rgba(0,0,0,0)" }}
                        src="/images/howtouse/aws.png"
                      />
                      Amazon Web Services
                    </div>
                  }
                  description={
                    <div>
                      AWS Recognizing Celebrities : Amazon Rekognition can
                      recognize thousands of celebrities in a wide range of
                      categories, such as entertainment and media, sports,
                      business, and politics. With Amazon Rekognition, you can
                      recognize celebrities in images and in stored videos. You
                      can also get additional information for recognized
                      celebrities.
                      <br />{" "}
                      <a
                        className="customa"
                        style={{
                          width: "auto",
                          position: "relative",
                          display: "block",
                        }}
                        href="https://docs.aws.amazon.com/rekognition/latest/dg/celebrities.html"
                        target="_blank"
                        rel="noreferrer noopener  nofollow "
                      >
                        Read more about Recognizing Celebrities in amazon
                      </a>
                    </div>
                  }
                  type="info"
                  showIcon
                />
                <br /> <span className="pbold"> 4. </span> After the process
                completed and the uploading & analyzing process finish you will
                see the picture that you uploaded on the left side. with
                bounding boxes for each celebrity recognized. Also, on the right
                side, you will get each celebrity name and face, in some cases
                when we detect that there is an actor in the picture we will get
                more information about him or her you can get this information
                by clicking on the name of the celebrite. The percent that shows
                on the right of the celebrity name is accuracy ratio.
                <br />
                <img
                  alt="AI result"
                  className="htuimg"
                  style={{ paddingBottom: 10 }}
                  src="/images/howtouse/result.jpg"
                />
                <br></br>
                <br></br>
                <span className="pbold"> 5. </span>
                This is the information that you will see when you detect an
                actor. the celebrity real name, Birthday, Born place, and all
                the movies. the movie's information we fetch it from{" "}
                <a
                  href="https://imdb.com"
                  target="_blank"
                  className="customa"
                  rel="noreferrer noopener  nofollow "
                >
                  imdb.com
                </a>{" "}
                all there is public information and free to use. Those are the
                informations you get :
                <Timeline style={{ paddingLeft: 20, paddingTop: 10 }}>
                  <Timeline.Item>Actor name</Timeline.Item>
                  <Timeline.Item>Actor birthday</Timeline.Item>
                  <Timeline.Item>Actor birth place</Timeline.Item>
                  <Timeline.Item>
                    All his films ,Serials and tv shows name
                  </Timeline.Item>
                  <Timeline.Item>Poster of the movie</Timeline.Item>
                  <Timeline.Item>Character name</Timeline.Item>
                  <Timeline.Item>IMDB rating</Timeline.Item>
                </Timeline>
                <img
                  alt="Movies"
                  className="htuimg"
                  style={{ paddingBottom: 10 }}
                  src="/images/howtouse/movies.jpg"
                />
                <br></br>
                <br></br>
                <span className="pbold"> 6. </span>Thank you{" "}
                <Icon
                  style={{ color: "#FF4343", fontSize: 20 }}
                  type="heart"
                  theme="filled"
                />
                <br></br>
                <br></br>
              
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default Howtouse;
