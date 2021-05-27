import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Babycareimage } from "../lib/Babycareimage";
import { Daily_deals } from "../lib/utils";
function Babycare(props) {
  return (
    <>
      <div>

      </div>

      <div>
        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px', width:'40',height:'25px',marginTop:'6px' }}>{props.rating}</Button>{' '}
          </Card.Title>
          <div class="box3">
          <Card.Img variant="top" src={props.img_care}  />

         </div>
          <Card.Body>
            <div style={{ fontSize: '14px', color: '#222222', marginLeft: '15px',marginTop:'15px' }}>
              {props.item_care}
            </div>
            <p>
              <span style={{ color: '#03A305', marginLeft: '15px', fontWeight: 'bold' ,marginTop:'15px'}}>{props.price_care}</span>
              <span style={{ marginLeft: '8px', textDecoration: 'line-through', fontSize: '12px',marginTop:'15px',fontWeight:'Nunito',color:'#222222' }}>{props.MRP_care}</span>
              <span style={{ color: '#7DCEA0', marginLeft: '8px', fontSize: '12px', color: '#03A305' ,marginTop:'15px'}}>{props.save_care}</span> </p>
            <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button">
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to </span>
              <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Babycare