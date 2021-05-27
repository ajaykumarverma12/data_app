import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { Dailydealimage } from "../lib/Dailydealimage";
import { Daily_deals } from "../lib/utils";
function Dailydeals(props) {
  return (
    <>
      <div>

      </div>

      <div>

        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <span className="span_value">{props.offer}</span>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305' }}>{props.seller}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px' }}>{props.rating}</Button>{' '}
          </Card.Title>
          <div className="box">
          <Card.Img variant="top" src={props.imgValue} className="img_type" />

          </div>
          <Card.Body>
            <div style={{ marginLeft: '20px', fontSize: '14px', color: '#222222' }}>
              {props.item1}
            </div>
            <p>
              <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                <span style={{ color: '#03A305', fontSize: '16px' }}>{props.price}</span>

                <span style={{ fontSize: '12px', color: '#222222', textDecoration: 'line-through', marginLeft: '10px' }}>{props.MRP}</span>
                <span style={{ color: '#7DCEA0', marginLeft: '30px', color: '#03A305', fontSize: '12px' }}>{props.save}</span> </div> </p>

            <Button variant="outline" className="deals_button"><span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold',borderColor:' #03A305' }}>Add to</span>  <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Dailydeals