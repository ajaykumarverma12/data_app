import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Popularimage } from "../lib/Popularimage";
import { Daily_deals } from "../lib/utils";
function Popularcard(props) {
  return (
    <>
      

      <div>
        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305', marginLeft: '15px' }}>{props.offerItem}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', width:'40',height:'25px',marginTop:'6px' }}>{props.rating}</Button>{' '}

          </Card.Title>
          <div class="box">
         <Card.Img variant="top" src={props.imgValue1} className="img_type1" /> 

         </div>
          <Card.Body>
    

            <div style={{ fontSize: '14px', color: '#222222', marginLeft: '16px',marginTop:'25px' }}>
              {props.item2}
            </div>
            <p>
              <span style={{ color: '#7DCEA0', marginLeft: '16px', fontSize: '16px', color: '#03A305',marginTop:'12px' }}>{props.priceValue}</span>
              <span style={{ marginLeft: '8px', textDecoration: 'line-through', fontSize: '12px',marginTop:'12px',fontWeight:'Nunito',color:'#222222'  }}>{props.MRP1}</span>
              <span style={{ color: '#03A305', marginLeft: '8px', fontSize: '12px' ,marginTop:'12px' }}>{props.save1}</span> </p>
            <Button variant="outline-success" className="deals_button" >
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Popularcard