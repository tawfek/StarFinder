import React, { Component } from 'react';
import {Avatar,Drawer,Tooltip, Card,List,Icon} from 'antd';
import MoviesBox from './moviesbox'
import axios from 'axios'; 
const {Meta}= Card;
const CancelToken = axios.CancelToken;
let cancel;
   class CardData extends Component {
    constructor(props) {
      super(props);
      this.state = {id: null,moviesData:null,moviesloading:true};
  
      // This binding is necessary to make `this` work in the callback
      this.showDrawer = this.showDrawer.bind(this);
    }

    sendR = (id) => {
      const imdb_url = (id)
      if(imdb_url!==null || imdb_url!==""  || imdb_url!==undefined){
      const nm_prefix = "nm"
       var Z = imdb_url.slice(imdb_url.indexOf(nm_prefix) + nm_prefix.length);
       Z = imdb_url.replace(new RegExp('.*' + nm_prefix), '');
       Z = imdb_url.split(nm_prefix).pop();
      Z=Z.substring(0,7); }else{Z=""}
      const url =`${process.env.REACT_APP_API_URL}/imdb.php?mid=${Z}`
     axios.request( {
       method: "get", 
       url: url, 
       cancelToken: new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        cancel = c;
      })
     }).then ((data,t) => {
       this.setState({
         moviesloading: false,
         moviesData:data.data
       })
     })
   
   }

    state = { visible: false };
    

    showDrawer = (e,r) => {
      this.setState({
        imdb_id:e,
        visible: true,moviesloading:true
      });
      this.sendR(e)
    };
  
    onClose = () => {
      cancel();

      this.setState({
        visible: false,
      });
    };
  doNothing=()=>{};
  render() {
    const data = this.props.data
   const height = data.height
   const width = data.width  
   const moviesData =this.state.moviesData
   var name =  '';var avatar=  '';var byear =  '';
  //  var celebImdb =  
   var birthplace ='';var realname ='';var movies_count='';

   if(moviesData!==null){
     const celebAv=  moviesData.Celeb[0]; 
      name = celebAv.name 
      realname = celebAv.realname
      avatar = celebAv.avatar
      byear = celebAv.birthday
      // celebImdb = celebAv.imdb_url
      birthplace = celebAv.birthplace
      movies_count =moviesData.movies_count
   }
   const showmov = (this.state.visible===true)?(<MoviesBox  data={this.state.moviesData}/>):'';

    return (
      <div>
      <List bordered
       style={{overflow:"auto"}}
      dataSource={this.props.data.celebs}
      renderItem={(item,id)=>{
        const celeb = item.celeb 
        const boximage = (width/( celeb.width * width))*30
        const leftbox = ( (celeb.Left *data.width)/data.width)*110
        const topbox = ( celeb.Top  *height/height)*100
        var concolor = 'black';

        if(celeb.Confidence<=10){
          concolor ="#f5222d" 
        }else if(celeb.Confidence <=50){
          concolor ="#faad14"
        }else if(celeb.Confidence <85){
           concolor ="#fa541c"
        }else{

        }          concolor="#52c41a"

                        return (
                          
        <List.Item key={id}>
          <List.Item.Meta
            avatar={
               <div style={{borderRadius:100,width:50,height:50,backgroundImage:`url(${this.props.src})`,backgroundPositionX:leftbox+"%",backgroundPositionY:topbox+"%",backgroundSize:boximage}}></div>
            }
            title={<a style={{position:"relative",top:(celeb.imdb_url!=="")?"0":"15px"}}  onClick={(celeb.imdb_url!=="" && process.env.REACT_APP_IMDB_INFO_ENABLE)?this.showDrawer.bind(this,celeb.imdb_url):(this.doNothing)} href="#!"><Icon theme="filled" type="star" style={{color:"yellow"}} /> {celeb.name}<br></br>
            {(celeb.imdb_url!=="" && process.env.REACT_APP_IMDB_INFO_ENABLE)?(<small style={{color:'lightgrey'}}>Click to get info</small>):''}
            </a>}
            
          />
           <Tooltip className="white" title="Accuracy ratio"><b><div><span style={{color:concolor}}>{Math.round(celeb.Confidence)}</span>% <Icon type="info-circle" theme="filled" /></div>  
 </b></Tooltip>
        </List.Item>
      )}}
    >
    
    </List>

<Drawer className="white"
placement="top"
closable={true}
onClose={this.onClose}
visible={this.state.visible}
>
<Card className="white" style={{ width: "100%", marginTop: 0,border:0 }} loading={this.state.moviesloading}>
          <Meta className="white"
            avatar={
              <Avatar src={avatar}  shape="square" size="large" />
            }
            title={[<Icon type="star" key={1} style={{color:"yellow"}} theme="filled"/>,'  ' ,name]}
            description={[<Icon type="idcard" key={2} theme="twoTone" />, <b key={3}> Real name :</b>,realname,<br key={12}></br>,<Icon type="calculator" key={15} theme="twoTone" />,<b key={54}> Birthday :</b>,byear ,<br key={97}></br>,<Icon key={22} type="environment" theme="twoTone" />,<b key={53}> Born in </b> ,birthplace,<br key={37}></br>,<Icon type="fire" theme="twoTone" key={32} />, <b key={31}> All Movies : </b>,movies_count,(movies_count>1)?" Movies":"Movie"]}
          />
          {(!this.state.moviesloading)?showmov:''}

        </Card>

</Drawer>
</div>

      );
  }
}
export default CardData;