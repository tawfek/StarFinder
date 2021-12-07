import React, { Component, Fragment } from 'react';
import {Card,Tooltip,Row,Col, Icon ,Divider } from 'antd';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

   class MoviesBox extends Component { 
 
 
  render() { 
    if(this.props.data!==null){

      const handleOnDragStart = e => e.preventDefault()
      const { Meta } = Card;

    const data = this.props.data 
 
   const movies = data.movies.map((item,i)=>{
        const movies =item ;
      const mov_name = movies.name 
      const mov_year = movies.year
      const mov_rate = movies.rating
      // const mov_id = movies.mov_id
      const mov_char = movies.char 
      const mov_poster = movies.cover
      const mov_yr_title =(mov_year!=="" && mov_year!=="Unknown")?" - "+ mov_year:''
      const mov_as=(mov_char==="Unknown character")?"":" As "+mov_char
      return(
        <Tooltip key={i} title={mov_name+"." + mov_as + mov_yr_title}>

      <Col className="mov_col white"  key={i}>
         <Card
    hoverable
    className="mov_box"
    cover={        <img onDragStart={handleOnDragStart}  className="img_slick" key={i} src={mov_poster} title={mov_name} alt={mov_name}/>  }
  >
    <Meta title={mov_name+mov_yr_title} description={(<Fragment>{(mov_as!=='')?(<small>{mov_as}<br></br></small>):''} {mov_rate}/10 <Icon type="star" theme="filled" style={{color:"yellow"}} /></Fragment>)} />
  </Card>
        </Col></Tooltip>)    

      })
      

  return (
  <div className="white" >
        <Divider style={{margin:0}} orientation="left"><h2 className="movies_title_h2"><Icon type="fire" theme="twoTone"/> Movies ({data.movies_count})</h2>

<span className="img_s" >    <Row>

    <AliceCarousel  className="white"
   buttonsDisabled={true} dotsDisabled={true} infinite={true}  mouseDragEnabled  >

{movies}
</AliceCarousel></Row>

</span>
</Divider>

  </div>);
  }else{
    return('')
  }
}
}
export default MoviesBox;