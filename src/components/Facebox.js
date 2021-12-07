import React, { Component } from 'react';
import {Button, Tooltip} from 'antd';
   class Facebox extends Component {
 
       state = {
           imgwidth:100 ,imgheight:100
       }
    componentDidMount(){
        const img = document.getElementById("faceimg");
        setTimeout(() => {
              this.setState({
            imgwidth:img.width , imgheight:img.height
        })
         }, 0);
      
    }
    
  render() {
     const data = this.props.data
      const celebs = data['celebs']
     const height = this.state.imgheight
     const width = this.state.imgwidth  
     const spanface = celebs.map((item,i)=>{
         const celeb = item.celeb 
         const left = celeb.Left 
         const top = celeb.Top 
         const realtop = top*height  ;
         const realwidth = celeb.width * width ;
         const realheight = celeb.height * height
         const relleft = (left*data.width/data.width)*100 
         const relltop = realtop
         return ( <Tooltip placement="bottom" title={celeb.name} key={i}>
         <span  style={{boxShadow:"0 0 10px #a3a3a3",borderRadius:4,width:realwidth,height:realheight,position:"absolute",left:relleft+"%",top:relltop,border:"3px solid #efefef"}} className={"face"+i}></span>
         </Tooltip>
         )         
     })
    return (   <div>
        <div className="ant-card ant-card-hoverable" >
            <div className="ant-card-cover">   
             <img  id="faceimg" className="uped" alt="Uploaded" src={this.props.src}/>
             <Button type="primary" className="anotherbutton"  shape="circle" icon="upload" >Click To select another photo</Button>
        </div></div>
     {spanface}</div>
      );
  }
}
export default Facebox;