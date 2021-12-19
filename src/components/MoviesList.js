import React, { Component } from "react";
import { connect } from "react-redux";
import { Tooltip, Tag, Icon } from "antd";

function mapStateToProps(state) {
  return {
    personFullInformation: state.personFullInformation,
    isPersonDataLoading: state.isPersonDataLoading,
  };
}
class Movies extends Component {
  render() {
    if (this.props.personFullInformation !== null) {
      let { movies, movies_count } = this.props.personFullInformation;
      if (movies !== undefined) {
        movies = movies.map((movie, i) => {
          let { name, year, chname, mid } = movie;
          return (
            <Tooltip
              className="movie_link"
              key={i}
              title={`${name} ${chname !== "" ? ` as ${chname}` : ""}  ${
                year !== "" ? `in ${year}` : ""
              }`}
            >
              <a
                href={`https://imdb.com/title/tt${mid}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Tag color="blue">{name}</Tag>
              </a>
            </Tooltip>
          );
        });
      }

      return (
        <div className="white">
          <h2 className="movies_title_h2 ">
            <Icon type="fire" theme="twoTone" /> Movies ({movies_count})
          </h2>
          {movies}
        </div>
      );
    } else {
      return "";
    }
  }
}
const MoviesList = connect(mapStateToProps, [])(Movies);
export default MoviesList;
