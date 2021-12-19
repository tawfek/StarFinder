import React, { Component}from "react";
import { Avatar, Drawer, Card, Icon } from "antd";
import MoviesList from "./MoviesList"
import {connect} from "react-redux"
import { setPersonInformation,setPersonFullInformation,setIsPersonDataLoading,setShowDrawer } from "../store/actions";


const { Meta } = Card;

function mapStateToProps(state){
  return {
    showDrawer:state.showDrawer,
    personInformationData:state.personInformationData,
    isPersonDataLoading:state.isPersonDataLoading,
    personFullInformation:state.personFullInformation,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setPersonInformation:(person)=>dispatch(setPersonInformation(person)),
    setIsPersonDataLoading:(loading)=>dispatch(setIsPersonDataLoading(loading)),
    setShowDrawer: value => dispatch(setShowDrawer(value)),
    setPersonFullInformation:information => dispatch(setPersonFullInformation(information)),
  }
}

class Person extends Component {
  constructor(props) {
    super(props);
   }




  onClose = () => {
    this.props.setShowDrawer(false)
  };

  render() {
    let { personFullInformation, isPersonDataLoading, showDrawer } = this.props;
    let PersonInformation = () =>
      !isPersonDataLoading && personFullInformation != null
        ? [
            <Icon type="calculator" key={4} theme="twoTone" />,
            <b key={5}> Birthday :</b>,
            personFullInformation.birthday,
            <br key={6}></br>,
            <Icon key={7} type="environment" theme="twoTone" />,
            <b key={8}> Born in </b>,
            personFullInformation.birth_place,
            <br key={9}></br>,
            <Icon type="fire" theme="twoTone" key={10} />,
            <b key={11}> All Movies : </b>,
            personFullInformation.movies_count,
            personFullInformation.movies_count > 1 ? " Movies" : "Movie",
          ]
        : [];

    return (
      <Drawer
        className="white"
        placement="top"
        closable={true}
        onClose={this.onClose}
        visible={showDrawer}
        size="large"
      >
        <Card
          className="white"
          style={{ width: "100%", marginTop: 0, border: 0 }}
          loading={isPersonDataLoading}
        >
          <Meta
            className="white"
            avatar={
              <Avatar
                src={
                  personFullInformation != null
                    ? personFullInformation.avatar
                    : ""
                }
                shape="square"
                size="large"
              />
            }
            title={[
              <Icon
                type="star"
                key={1}
                style={{ color: "yellow" }}
                theme="filled"
              />,
              "  ",
              (personFullInformation!= null)? personFullInformation.name : "NONAME",
            ]}
            description={<PersonInformation />}
          />
          {!isPersonDataLoading ?  <MoviesList  />:''}
        </Card>
      </Drawer>
    );
  }
}

const PersonInformation = connect(mapStateToProps,mapDispatchToProps)(Person)
export default PersonInformation;
