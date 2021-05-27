import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { logged } from "../lib/utils";
import Myaccount from './Myaccount';




const Loginsuccess = () => {
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
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <p style={{ color: 'green', fontWeight: '12px', marginTop: '20px',textAlign:'center',fontWeight:'bold' }}>Logged in Successful</p>

                <Modal.Body>
                    <img src={logged} className="img_log" />


                    <Button onClick={bgChange} variant="success" style={{ marginTop: '40px', padding: '10px 100px', marginLeft: '55px', marginBottom: '20px',borderRadius:'8px 8px 8px 8px' }}>
                        Continue Shopping
      </Button>
                </Modal.Body>

            </Modal>
        );
    }

    const secondPage = () => {
        return (

            <>
                <Myaccount />
            </>

        )
    }



    return (
        <>





            { data ? secondPage() : <><MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}

        </>
    );
}
export default Loginsuccess 