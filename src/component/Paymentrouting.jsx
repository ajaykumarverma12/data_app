import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup, Card } from "react-bootstrap"
import { moneyicon, credit, googlepay, phonepay, deposit,paytm,logged } from "../lib/utils";
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';
import Orderconfirm from "./Orderconfirm";


const Paymentrouting = () => {
    const [showtext, setshowtext] = useState(false)


    return (
        <>
            <HamburgerMenu />
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "70px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                            <div style={{ maxHeight: "45px", marginBottom: "10px", marginTop: "20px" }}>
                                <ListGroup horizontal className="nchange_13" >
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>My cart</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Delivery Address</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Date & Time</ListGroup.Item>
                                    <ListGroup.Item className="listing" style={{ border: "none", borderBottom: "5px solid green", color: "#03A305" }}>Payment</ListGroup.Item>
                                </ListGroup>
                            </div>

                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "10px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>

                            <MDBRow>
                                <MDBCol md="4" style={{ marginTop: '40px' }}>
                                    <div style={{ marginLeft: '32px', fontSize: '16px', color: '#000000', font: 'Nunito', opacity: '100%' }}>
                                        <span >Select Payment method</span>

                                    </div>
                                    <Card style={{ width: '100px', height: '80px', boxShadow: '#0000000F 2px 2px 6px', marginTop: '20px', marginLeft: '40px', borderColor: '#03A305' }}>
                                        <Card.Body>
                                            <img src={logged} style={{ margin: '-100px 0px' }}/>
                                            <img src={moneyicon} style={{ margin: '5px 30px' }} />


                                        </Card.Body>
                                    </Card>
                                    <p style={{ color: '#222222', fontSize: '12px', font: 'Roboto', marginLeft: '75px', marginTop: '10px' }}>Cash</p>

                                    <Card className="paymentcard">
                                        <Card.Body>
                                            <img src={credit} style={{ margin: '10px 20px' }} />

                                        </Card.Body>
                                    </Card>
                                    <p style={{ color: '#222222', fontSize: '12px', font: 'Roboto', marginLeft: '70px', marginTop: '10px' }}>Paytm</p>
                                    <Card className="paymentcard" >
                                        <Card.Body>
                                            <img src={paytm} style={{ margin: '12px 10px' }} />

                                        </Card.Body>
                                    </Card>
                                    <p style={{ color: '#222222', fontSize: '12px', font: 'Roboto', marginLeft: '50px', marginTop: '10px' }}>Credit/Debit Card</p>
                                    <Card className="paymentcard">
                                        <Card.Body>
                                            <img src={googlepay} style={{ margin: '2px 10px' }} />

                                        </Card.Body>
                                    </Card>
                                    <p style={{ color: '#222222', fontSize: '12px', font: 'Roboto', marginLeft: '75px', marginTop: '10px' }}>Cash</p>
                                    <Card className="paymentcard">
                                        <Card.Body>
                                            <img src={phonepay} style={{ margin: '2px 10px' }} />

                                        </Card.Body>
                                        
                                    </Card>
                                    <p style={{ color: '#222222', fontSize: '12px', font: 'Roboto', marginLeft: '65px', marginTop: '10px' }}>Googlepay</p>

                                </MDBCol>
                                <MDBCol md="6" style={{ marginTop: '270px', marginLeft: '110px' }}>
                                    <img src={deposit} style={{ margin: '2px 10px' }} />

                                </MDBCol>

                            </MDBRow>

                            <MDBRow>
                                <MDBCol md="12">
                                    <div style={{ marginLeft: '200px', float: 'right', marginRight: '40px', fontSize: '16px' }}>
                                        <Button variant="success" style={{ padding: '10px 100px', borderRadius: '8px 8px 8px 8px' }} onClick={() => setshowtext(!showtext)}  >
                                            Confirm Order
</Button>
                                        {showtext && <div><Orderconfirm /> </div>}
                                    </div>
                                </MDBCol>

                            </MDBRow>



                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </>
    )
};
export default Paymentrouting