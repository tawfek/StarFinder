import React, { Component ,Fragment} from 'react';
import {Skeleton,Col,Row,message,Upload,Progress,Icon } from 'antd';
import CardData from '../components/carddata'
import Facebox from '../components/Facebox'
import {Helmet} from "react-helmet";

import Header from '../components/header' 
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
 
   const isJPGR = (file.type==="image/png")?file.type === "image/png":file.type==="image/jpeg";
if (!isJPGR) { message.error('You can only upload JPG and PNG file!'); } 
const isLt2M = file.size / 1024 / 1024 <= 4.9;
  if (!isLt2M) {
   message.error('Image must smaller than 5MB!');
 } return isJPGR && isLt2M; }
 
class Home extends Component {
  
  state = {
    loading: false,
    data :null ,
    progress:null,
  };
  handleChange = info => {
     this.setState({data:null,imageUrl:null,progress:null})

    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if(info.file.status==='error'){
// console.log(info.file)

      message.error('Please try again,An unexpected error hapend while uploading!check you internet connection.');

      this.setState({
        loading: false,

        
      })
    }
    if (info.file.status === 'done') {
      if(info.file.response.status!==undefined && info.file.response.status!=="error" ){
        if(info.file.response.celebs!==undefined && info.file.response.celebs.length >0 ){
          
       getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,

          
        }),
 
      );
       this.setState({
        data : info.file.response
      })

    }else{
      message.warning("Sorry no celebrities found in the photo!");
      this.setState({ loading: false});
 
    }
       }else{
         if(info.file.response.status!==undefined){
            message.error(info.file.response.message);
         }else{
        message.error('Please try agin,An unexpected error hapend while uploading!');
         }
        this.setState({
          loading: false,
          
        })
      }
    
    }
  };
  handleProgress = info => {
   this.setState({
    progress:info.percent
  })
  }


  render() {
    const imageUrl = this.state.imageUrl;
    const uploadButton = (
      <div>
        {(this.state.progress==null)?(<Icon style={{fontSize:"5vh"}} type={this.state.loading ? 'loading' : 'upload'}  spin={this.state.loading?true:false} />):(    <Progress  type="circle" style={{color:"white"}} percent={Math.round(this.state.progress)} width={50} />)}
        <div className="ant-upload-text">{(this.state.loading)?(this.state.progress<100)?"Uploading...":"Analysing...":"Select or drop photo here "}</div>
      </div>
    );
    return (
      <Fragment>
      <Helmet> 
  <title>Star Finder - Best AI to detect celebrities from picture (online)</title>
  <meta name="og:title" content="Star Finder - Best AI to detect celebrities from picture (online)"/>

      </Helmet>
<div style={{marginBottom:"10em"}}>

       <Row type="flex"   justify="center">
         <Header/>
        <Col style={{position:"relative","top":"3vh"}} className="bshadow white" xs={24} sm={24} md={23} lg={20} xl={19}>
          <Row>
            <Col style={{height:"100%"}} sm={24} md={(this.state.loading===true || this.state.data!==null)?10:24}>
        <Upload disabled={this.state.loading?true:false}  name="celebimage" 
        listType="picture-card"
        className="avatar-uploader white"
        showUploadList={false}
         action="https://v2.instauser.tk"
         
        onProgress={this.handleProgress}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}>
    {imageUrl ?<Facebox src={imageUrl} data={this.state.data}/>: uploadButton}
      </Upload>
</Col>

{this.state.loading?(<Col sm={24} md={13} className="white" style={{"padding":"10px","paddingBottom":0}}>
<Skeleton active className="white"   avatar paragraph={{ rows: 2 }} />
</Col>):''}
{(this.state.data!==null)?(
<Col sm={24} md={13} className="white"  style={{"padding":"10px"}}>
<CardData src={this.state.imageUrl} data={this.state.data} />

</Col>

):''}
          </Row>

        </Col>
      </Row></div></Fragment>
    );
  }
}
export default Home;