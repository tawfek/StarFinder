import React, { Component,Fragment } from 'react';
import Header from '../components/header';
import {Helmet} from "react-helmet";
import { Comment, Avatar,Alert,Row,Col,Button, Icon} from 'antd'
   class Contact extends Component {
  render() {
    return (
       
       <Fragment>
      <Helmet> 
  <title>Contact us | Starfinder.me</title>
  <meta name="og:title" content="Contact us | Starfinder.me"/>

      </Helmet>
      <Row type="flex"   justify="center" style={{marginBottom:'15vh'}}>
   <Header/>
   <Col style={{position:"relative","top":"3vh"}} className="bshadow white" xs={24} sm={24} md={23} lg={20} xl={19}>
          <Row>
            <Col style={{height:"100%",padding:"10px 20px"}} sm={24} >
            <h1 className="pfont"><Icon type="phone"  theme="filled" /> Contact us</h1><br/>

             you can contact me on FB, telegram, email.For any further information or if you want to report any thing.
        <br></br>
        <a  href="https://fb.com/t200o" target="_blank"  rel=" noopener noreferrer nofollow " ><Button style={{background:"#3B5998",border:0,margin:10,color:"white"}} ><Icon theme="filled" type="facebook" />My facebook</Button></a>
        <a href="https://t.me/uzull" target="_blank" rel="noreferrer noopener  nofollow " ><Button style={{background:"#179CDE",border:0,margin:10,color:"white"}} ><Icon type="message"/>  My Telegram</Button></a>
        <a href="mailto:tawfekaltaae3@gmail.com" target="_blank" rel="noreferrer noopener  nofollow " ><Button  style={{background:"#FF4343",border:0,margin:10,color:"white"}}><Icon type="mail" />My E-mail</Button></a>
        <br/>

        <Alert
      message="You want more free services?we are ready! "
      description={(<div>We pay money and work hard to keep this site working and for your beautiful eyes we offer this simple service to you. When you need help or free service, we will always be by your side. This is the secret of life. Because we are all brothers, we must help each other to continue working, progress and prosperity. You can help me and encourage me to make other free services that may help you or help others by donating a small amount. I will be grateful to you and all my users will be happy that you are the reason for the continuation of the site <Icon type="heart" theme="filled" style={{color:"red"}}/>.
      <br/>
      <Row justify="center"><Col sm={24} md={12} style={{marginTop:20}}>
      <a target="_blank" rel="noreferrer noopener  nofollow " href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=tawfekaltaae3%40gmail.com&item_name=To+be+continued.&currency_code=USD&source=url"><img alt="Paypal" className="htuimg ppd" style={{width:150}} src="htu/pp.png"/></a>
      </Col><Col sm={24} md={12}>
<Comment style={{background:"white",boxShadow:"0 0 10px #ffd8b1",margin:10,maxWidth:405,padding:10,borderRadius:10}}
       
        avatar={      <a target="_blank"   rel="noreferrer noopener  nofollow " href="https://www.blockchain.com/btc/address/1JQK7sauztiwbL5m1QFLx2kcyJ1tSpZLo">

          <Avatar className="btcd"
            src="htu/qr.png"
            alt="BTC QR CODE ADDRESS" shape="square" size="190px"
          /></a>
        }
        content={
          <p>
             <a target="_blank"  rel="noreferrer noopener  nofollow " href="https://www.blockchain.com/btc/address/1JQK7sauztiwbL5m1QFLx2kcyJ1tSpZLo">
             Bitcoin Address :</a><br/>	<b>1JQK7sauztiwbL5m1QFLx2kcyJ1tSpZLo</b>
          </p>
        }
      
      /> </Col></Row>
      </div>)}
      type="success"
      showIcon
    /> 
 </Col>
</Row>
        </Col></Row>      </Fragment>

    );
  }
}
export default Contact;