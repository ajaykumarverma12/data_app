import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ListGroup } from "react-bootstrap"
import { homeIcon1 } from "../lib/utils";
import Addaddress from './Addaddress';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';
const Mobileverification = () => {
    const [data, showdata] = useState(true);
    const handlepage = () => {
        showdata(false);
        window.location.href = '/date';

    }

    return (
        <>

            <HamburgerMenu />
          
            <MDBContainer fluid className="text-center text-md-left" style={{ marginTop: '32px' }}>

                <MDBRow>
                    <MDBCol md="11">
                        <div style={{ marginLeft: '150px', marginTop: "5px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', opacity: '100%', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>
                        <div style={{maxHeight:"45px",marginBottom:"10px",marginTop:"20px"}}>
     <ListGroup horizontal className="nchange_13" >
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green",color:"#03A305"}} >My cart</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green"}}>Delivery Address</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none"}}>Date & Time</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none"}}>Payment</ListGroup.Item>
</ListGroup>
</div>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div className="bordercart" >
                            <MDBRow>
                                <MDBCol md="4" style={{marginBottom:'25px',marginTop:'37px'}}>
                                    <img src={homeIcon1} style={{ marginLeft: '21px' }} />
                                    <span style={{ marginLeft: '17px', color: '#222222', font: 'bold', fontSize: '14px' }}>Home</span>
                                    <p style={{ marginLeft: '63px', fontSize: '14px', color: '#222222' }}>228,Lajpat Rai Market,Chandni Chowk Delhi 110006</p>
                                </MDBCol>
                                <MDBCol md="4" style={{ marginTop: '50px', marginLeft: '90px' }}>

                                </MDBCol>
                                <MDBCol md="2" className="mdcolcss">
                                    <p style={{ color: 'green', marginLeft: '190px', marginTop: '45px' }}>Edit</p>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <div className="bordercart">
                            <MDBRow>
                                <MDBCol md="4" style={{marginBottom:'38px',marginTop:'37px'}} >
                                    <Addaddress />
                                </MDBCol>

                            </MDBRow>
                        </div>
                    </MDBCol>
                    <MDBCol md="11" >
                        <div className="bordercart1">
                            <MDBRow>


                                <MDBCol md="12" style={{ marginTop: '240px',marginLeft:'80px' }} >


                                    <Button variant="success" style={{ padding: '10px 100px', borderRadius: '8px 8px 8px 8px', float: 'right', marginRight: '80px' }} onClick={handlepage} >
                                        Confirm Address
  </Button>

                                </MDBCol>

                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



           















        </>
    )
};
export default Mobileverification
