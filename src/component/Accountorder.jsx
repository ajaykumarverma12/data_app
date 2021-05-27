import React from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { mobileno, order, address, logout } from "../lib/utils";
import { useState } from 'react';
function Accountorder() {
    const [data, setdata] = useState(false);
    const orderpage = () => {
        setdata(true);
        window.location.href = 'addressone'
    }
    const myorderpage = () => {
        setdata(true)
        window.location.href = 'account'
    }


    return (
        <div>
            <HamburgerMenu />
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '30px' }}>
                        <div style={{ marginRight: '-107px', marginLeft: '-192px' }}>
                        </div>
                        <div style={{ marginTop: '23px', marginBottom: '10px', }}>
                            <img src={mobileno} />
                            <span className="text_item" >+91-7835332564</span>

                        </div>


                    </MDBCol>

                    <MDBCol md="8" style={{ boxShadow: '0px 3px 6px #00000014', marginTop: '30px', marginLeft: '20px' }}>
                        <h5 style={{ marginTop: '14px', marginRight: '20px', fontSize: '14px', color: '#222222',fontWeight:'bold' }}>1 Feburary 2021</h5>

                        <span style={{ marginRight: '20px', fontSize: '14px',fontWeight:'Nunito' }}>5 Items</span>
                        <span style={{ float: 'right', marginRight: '100px', fontSize: '16px', color: '#03A305' }}>Repeat
<span style={{ marginLeft: '50px', color: '#E00000' }}>Remove</span>
                        </span>
                        <p style={{ marginRight: '20px', fontSize: '14px', color: '#222222',fontWeight:'Nunito',marginTop:'12px' }}>Total Amount: <span style={{ marginLeft: '28px', fontSize: '14px', color: '#222222',fontWeight:'Nunito',marginTop:'12px' }}>₹ 615</span></p>



                    </MDBCol>

                </MDBRow>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '30px', height: '700px' }}>
                        <img src={order} />
                        <span className="text_item" style={{ color: '#03A305' }} onClick={myorderpage} >MyOrder</span>
                        <hr />
                        <div style={{ marginTop: '45px' }}>
                            <img src={address} />
                            <span className="text_item" onClick={orderpage}  >MyAddress</span>
                            <hr />

                        </div>
                        <div style={{ marginTop: '45px' }}>
                            <img src={logout} />
                            <span className="text_item"  >Logout</span>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    );
}

export default Accountorder;
