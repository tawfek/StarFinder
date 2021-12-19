import React, { Component, Fragment } from "react";
import {connect} from "react-redux"
import { Card, Tooltip, Row, Col, Icon, Divider } from "antd";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

function mapStateToProps(state){
  return {
    personFullInformation:state.personFullInformation,
    isPersonDataLoading:state.isPersonDataLoading,
  }
}
class Movies extends Component {
  render() {
    if (this.props.personFullInformation !== null) {
      let handleOnDragStart = (e) => e.preventDefault();
      let { Meta } = Card;

      let {movies,movies_count} = this.props.personFullInformation;
      if(movies!== undefined){
       movies = movies.map((movie, i) => {
        let {name,year,chname,mid,rating,poster} = movie
        return (
          <Tooltip key={i} title={`${name} as ${chname} in ${year}`}>
            <a href={`https://imdb.com/title/tt${mid}`} target="_blank" >

            <Col sm={12} md={4}   className="mov_col white" key={i}>
              <Card
                hoverable
                className="mov_box"
                cover={
                  <img
                    onDragStart={handleOnDragStart}
                    className="img_slick"
                    key={i}
                    src={mid}
                    title={name}
                    alt={name}
                  />
                }
              >
                <Meta
                  title={`${name} ${year!=""?` - ${year}`:""}`}
                  description={
                    <small>
                     as {chname} <br/>
                      {rating}/10{" "}
                      <Icon
                        type="star"
                        theme="filled"
                        style={{ color: "yellow" }}
                      />
                    </small>
                  }
                />
              </Card>
            </Col>
            </a>
          </Tooltip>
        );
      });
    }

      return (
        <div className="white">
            <h2 className="movies_title_h2">
              <Icon type="fire" theme="twoTone" /> Movies ({movies_count})
            </h2>

            <span className="img_s">
              {" "}
              <Row>
                {/* <AliceCarousel
                  className="white"
                  buttonsDisabled={true}
                  dotsDisabled={true}
                  infinite={true}
                  mouseDragEnabled
                > */}
                  {movies}
                {/* </AliceCarousel> */}
              </Row>
            </span>
        </div>
      );
    } else {
      return "";
    }
  }
}
const MoviesList = connect(mapStateToProps,[])(Movies)
export default MoviesList;

// todo : styling movies list , backend api get poster and rating 