import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import { Fruitimage } from "../lib/Fruitimage";
import { Daily_deals } from "../lib/utils";
function Fruit(props) {
  return (
    <>
      

      <div>

        <Card style={{ width: '18rem' }} className="cardItem">
          <Card.Title>
            <span style={{ fontSize: '12px', fontWeight: 'regular', color: '#03A305', marginLeft: '15px' }}>{props.offer_fruit}</span>
            <Button variant="success" className="btn_Value" className="btn btn-sm" style={{ float: 'right', marginRight: '10px', marginTop: '5px', width:'40',height:'25px',marginTop:'6px'  }}>
              {props.rating}</Button>{' '}


          </Card.Title>
          <div className="box1">
          <Card.Img variant="top" src={props.img_fruit} className="img_type" />

          </div>
          <Card.Body>
            <div style={{ fontSize: '14px', color: '#222222', fontWeight: 'Nunito',marginTop:'25px',marginLeft:'6px' }}>
              {props.item_fruit}
            </div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select" style={{ fontSize: '14px', color: '#222222',marginLeft:'2px' }}>
                  <option>{props.item_weight}</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Form.Group>


            </Form>
            <p>
              <span style={{ color: '#03A305', fontWeight: 'bold',marginLeft:'6px' }}>{props.price_fruit}</span>
              <span style={{ marginLeft: '20px', textDecoration: 'line-through', fontSize: '12px' ,marginLeft:'18px',fontWeight:'Nunito',color:'#222222'}}>{props.MRP_fruit}</span>
              <span style={{ color: '#7DCEA0', marginLeft: '20px', fontSize: '12px', color: '#03A305',marginLeft:'15px' }}>{props.save_fruit}</span> </p>
            <Button variant="outline" style={{borderColor:' #03A305'}} className="deals_button">
              <span style={{ fontSize: '12px', color: '#03A305', fontWeight: 'bold' }}>Add to </span>
              <img src={Daily_deals} /></Button>{' '}
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default Fruit