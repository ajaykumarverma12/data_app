import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Persnalcareimage } from "../lib/Persnalcareimage";
import { Daily_deals } from "../lib/utils";
function Persnalcare(props) {
  return (
    <>
      <div>

      </div>

      <div>
        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px', width:'40',height:'25px',marginTop:'6px' }}>{props.rating}</Button>{' '}

          </Card.Title>
          <div className="box">
          <Card.Img variant="top" src={props.img_care1} className="img_type" />

          </div>
          
         
          <Card.Body>

            <div style={{ fontSize: '14px', color: '#222222', marginLeft: '15px',marginTop:'15px' }}>
              {props.item_care1}
            </div>
            <p>
              <span style={{ color: '#03A305', marginLeft: '15px', fontWeight: 'bold',marginTop:'12px' }}>{props.price_care1}</span>
              <span style={{ marginLeft: '15px', textDecoration: 'line-through', fontSize: '12px',marginTop:'12px',fontWeight:'Nunito',color:'#222222' }}>{props.MRP_care1}</span>
              <span style={{ color: '#7DCEA0', marginLeft: '18px', fontSize: '12px', color: '#03A305',marginTop:'12px' }}>{props.save_care1}</span> </p>
            <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button">
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to </span>
              <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Persnalcare