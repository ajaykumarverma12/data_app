import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { mobileno, order, address, logout } from "../lib/utils";
import { useState } from 'react';
import Dailydeals from './Dailydeals';
import Singleitemimage from "../lib/Singleitemimage";
import Homedailycard from './Homedailycard';
import HamburgerMenu from '../container/menu/HamburgerMenu';
import MenuBottom from '../container/MenuBottom';
function Singlecategory(props) {
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
            <MenuBottom />



     
                
                
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="2">
                    <div style={{ marginTop: "20px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>

                        <span style={{  fontWeight: 'bold', fontSize: '20px', color: '#000000' }} >Daily Deals
                             </span>

</div>
                    </MDBCol>
                    <MDBCol md="8" style={{marginTop:'32px' }}>
                    <div style={{borderRadius: '2px 2px 2px 2px', color: '#FFFFFF' }}>

                        <span style={{ marginLeft: '20px', fontSize: '14px', color: '#000000'}} >Home</span>
                        <span style={{ marginLeft: '20px', fontSize: '14px', color: '#000000' }} >Daily Deals</span>
                        </div>
                    </MDBCol>

                </MDBRow>
                <MDBRow>

                    <MDBCol md="2">
                        <div style={{ marginTop: '25px' }}>
                        <div style={{ marginTop: "20px", borderRadius: '2px 2px 2px 2px', color: '#FFFFFF', boxShadow: '0px 2px 8px  #00000014', padding: '10px' }}>

                            <hr />
                            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#000000' }}>Cold Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#000000' }}>Tea & Coffee</p>
                            <hr />
                            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#000000' }}>Juices & Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#000000' }}>Healthy Energy Drinks</p>
                            <hr />
                            <p style={{ marginLeft: '16px', fontSize: '16px', color: '#000000' }}>Spices</p>
</div>
                        </div>

                    </MDBCol>

                    {Singleitemimage.map((val) => {
                        return (
                            <Homedailycard
                                imgValue={val.imgValue}
                                item1={val.item1}
                                price={val.price}
                                save={val.save}
                                MRP={val.MRP}
                                rating={val.rating}
                                seller={val.seller}
                            />

                        )
                    })}




                </MDBRow>
                <MDBRow>
                    <MDBCol md="2">

                    </MDBCol>
                    {Singleitemimage.map((val) => {
                        return (
                            <Homedailycard
                                imgValue={val.imgValue}
                                item1={val.item1}
                                price={val.price}
                                save={val.save}
                                MRP={val.MRP}
                                rating={val.rating}
                                seller={val.seller}
                            />

                        )
                    })}
                </MDBRow>
            </MDBContainer>

        </div>
    );
}

export default Singlecategory;
