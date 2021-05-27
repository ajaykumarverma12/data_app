import React from "react";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { CardImage } from "../lib/CardImage";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


function CardComponent(props) {
  return (
    <>

      <div >
       
                        <Card style={{ width: '18rem' }} className="cardItem">
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#03A305', marginTop: '12px', marginLeft: '12px' }}>{props.offvalue}</h4>
          <div className="box4">
          <Card.Img variant="top" src={props.imgsrc} className="img_type" />

          </div>
          
          <Card.Body>
            <center><h5 style={{ fontSize: '16px', color: '#222222' }}>{props.categry}</h5></center>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
export default CardComponent