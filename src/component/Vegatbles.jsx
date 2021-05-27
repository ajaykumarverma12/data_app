import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import { Vegatblesimage } from "../lib/Vegatblesimage";
import { Daily_deals } from "../lib/utils";
function Vegatbles(props) {
  return (
    <>


      <div>
        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305', marginLeft: '15px' }}>{props.offer_veg}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px', width: '40', height: '25px', marginTop: '6px' }}>
              {props.rating}
            </Button>{' '}


          </Card.Title>
          <div className="box">
            <Card.Img variant="top" src={props.img_Veg} />

          </div>
          <Card.Body>
            <div style={{ fontSize: '14px', color: '#222222', fontWeight: '56px', marginLeft: '2px' }}>
              {props.item_veg}
            </div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" style={{ fontSize: '14px', color: '#222222', borderRadius: '4px 4px 4px 4px', marginLeft: '4px' }}>
                  <option style={{ color: '#222222', fontWeight: 'Nunito', fontSize: '14px' }}>{props.item_weight}</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>


            </Form>
            <p>
              <span style={{ color: '#03A305', marginLeft: '4px', fontWeight: 'bold' }}>{props.price_veg}</span>
              <span style={{ marginLeft: '20px', textDecoration: 'line-through', fontSize: '12px', marginLeft: '15px', fontWeight: 'Nunito', color: '#222222' }}>{props.MRP_veg}</span>
              <span style={{ color: '#7DCEA0', marginLeft: '20px', fontSize: '12px', color: '#03A305', marginLeft: '18px', }}>{props.save_veg}</span> </p>
            <Button variant="outline" className="deals_button" style={{ marginTop: '10px', borderColor: ' #03A305' }}>
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to </span>
              <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Vegatbles