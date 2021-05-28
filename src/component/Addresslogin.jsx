import React from 'react';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { mobileno, order, address, logout, homeIcon1, plusadd } from "../lib/utils";
import { useState } from 'react';
function Addresslogin() {
    const [data, setdata] = useState(false)
    const addsignpage = () => {
        setdata(true)
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
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '80px' }}>
                        <div style={{ marginRight: '-107px', marginLeft: '-192px' }}>
                        </div>
                        <div style={{ marginTop: '23px', marginBottom: '10px', }}>
                            <img src={mobileno} />
                            <span className="text_item" >+91-7835332564</span>

                        </div>


                    </MDBCol>

                    <MDBCol md="8" style={{ boxShadow: '0px 3px 6px #00000014', marginTop: '80px', marginLeft: '20px' }}>
                        <div style={{ marginTop: '25px', marginBottom: '30px' }}>
                            <img src={homeIcon1} />
                            <span style={{ marginLeft: '35px', fontSize: '14px', color: '#222222',fontWeight:'bold' }}>Home</span>
                            <span style={{ float: 'right', marginRight: '100px', fontSize: '16px', color: '#03A305', marginTop: '20px' }}>Edit
<span style={{ marginLeft: '50px', color: '#E00000' }}>Delete</span>
                            </span>
                            <p style={{ marginLeft: '60px', fontSize: '14px', color: '#222222' }}>228,Lajpat Rai Market , Chandni Chowk Delhi 110006</p>
                        </div>



                    </MDBCol>

                </MDBRow>
                <MDBRow>
                    <MDBCol md="2" style={{ marginLeft: '150px', boxShadow: '0px 3px 6px #00000014', marginTop: '30px' }}>
                        <div style={{ height: '700px' }}>
                            <img src={order} />
                            <span className="text_item" onClick={myorderpage}  >MyOrder</span>
                            <hr />
                            <div style={{ marginTop: '45px' }}>
                                <img src={address} />
                                <span className="text_item" style={{ color: '#03A305' }} onClick={addsignpage} >MyAddress</span>
                                <hr />

                            </div>
                            <div style={{ marginTop: '45px' }}>
                                <img src={logout} />
                                <span className="text_item"  >Logout</span>
                            </div>
                        </div>



                    </MDBCol>

                    <MDBCol md="8" style={{ boxShadow: '0px 3px 6px #00000014', marginTop: '30px', marginLeft: '20px', height: '80px' }}>
                        <div style={{ marginTop: '25px', marginBottom: '40px' }}>
                            <img src={plusadd} />
                            <span style={{ marginLeft: '35px', fontSize: '14px', color: '#03A305' }}>Add Another/New Addresses</span>
                        </div>



                    </MDBCol>

                </MDBRow>
            </MDBContainer>




        </div>
    );
}

export default Addresslogin;
