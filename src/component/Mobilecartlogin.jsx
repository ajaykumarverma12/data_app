import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form, Col } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import Loginsuccess from './Loginsuccess';





const Mobilecartlogin = () => {
    const [modalShow, setModalShow] = React.useState(true);
    const [data, setData] = useState(false);


    const bgChange = () => {
        setData(true);

    }

    const MyVerticallyCenteredModal = (props) => {
        return (



            <Modal style={{ borderRadius: '15px' }}
                {...props}

                centered
            >
                <Modal.Header 
                closeButton  >
                    
                </Modal.Header>
                <span style={{textAlign:'center',fontSize:'16px',color:'#000000',fontWeight:'bold'}}>Mobile verification</span>

                <Modal.Body>
                    <p style={{ marginLeft:'83px',fontSize:'16px',color:'#000000',fontWeight:'Nunito' }}>Enter 4 digit code sent to mobile number</p>
                    <p style={{ textAlign: 'center',marginTop:'8px',fontSize:'16px',color:'#000000',fontWeight:'Nunito'  }}>+91 -7835XXXXXX</p>
                    <Form>
                        <Form.Row style={{ marginLeft: '90px' }}>
                            <Col xs={2}  >
                                <Form.Control className="formlogin" />
                            </Col>
                            <Col xs={2}>
                                <Form.Control className="formlogin"/>
                            </Col>
                            <Col xs={2}>
                                <Form.Control className="formlogin"/>
                            </Col>
                            <Col xs={2}>
                                <Form.Control className="formlogin" />
                            </Col>
                        </Form.Row>
                    </Form>
                    <center><Button onClick={bgChange} variant="success" style={{ marginTop: '40px', padding: '10px 130px', marginBottom: '20px',borderRadius:'8px 8px 8px 8px' }}>
                        Verify
      </Button></center>
                </Modal.Body>

            </Modal>
        );
    }

    const secondPage = () => {
        return (
            <>
                <Loginsuccess />
            </>
        )
    }




    return (
        <>
            {/* <p onClick={() => setModalShow(true)}>Login/SignUp */}
            {/* </p> */}
            { data ? secondPage() : <><MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}


        </>
    );
}
export default Mobilecartlogin  