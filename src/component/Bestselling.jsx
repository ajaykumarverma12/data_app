import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Daily_deals } from "../lib/utils";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Bestselling(props) {
  return (
    <>
      <div>

      <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <span className="span_value">{props.offer}</span>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305',marginLeft:'16',marginTop:'12px' }}>{props.seller}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px',width:'40',height:'25px',marginTop:'6px' }}>
             <span style={{width:'20px',height:'19px',textAlign:'center',color:'#FFFFFF',fontSize:'14px'}}>{props.rating}</span> 
              </Button>{' '}
          </Card.Title>
          <div className="box">
          <Card.Img variant="top" src={props.imgValue} className="img_type" />

          </div>
          <Card.Body>
            <div style={{  fontSize: '14px', color: '#222222',marginLeft:'16px',fontWeight:'Nunito'}}>
              {props.item1}
            </div>
            <p>
              <div style={{ marginLeft: '16px', marginTop: '10px' }}>
                <span style={{ color: '#03A305', fontSize: '16px' }}>{props.price}</span>

                <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '8px',fontWeight:'Nunito' }}>{props.MRP}</span>
                <span style={{ color: '#7DCEA0', marginLeft: '8px', color: '#03A305', fontSize: '12px' }}>{props.save}</span> </div> </p>
                <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button" >
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}

          
          </Card.Body>
          
        </Card> 


      

      </div>
    </>
  )
}
export default Bestselling;
