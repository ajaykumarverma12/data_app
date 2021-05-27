import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import Mobilecartlogin from './Mobilecartlogin';





const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState(false);



    const bgChange = () => {
        setData(true);


    }

    const MyVerticallyCenteredModal = (props) => {
        return (
            <Modal style={{borderRadius:'16px 16px 16px 16px'}}
                {...props}
                centered

            >
                <Modal.Header closeButton >
                </Modal.Header>
                <p style={{textAlign:'center',color:'#000000',fontSize:'16px',fontWeight:'bold'}}>Login/Sign Up</p>

                <Modal.Body>
                    <p style={{ font: 'Nunito', textAlign: 'center',color:'#000000',fontSize:'16px' }}>Enter Your Mobile number</p>
                    <button style={{ marginLeft: '100px', padding: '5px 0px',color:'#EFF1F3',borderRadius:'8px 8px 8px 8px',border:'none' }}>
                        <img src={mobilesign} className="form-control-sm" />
               <span style={{fontSize:'14px',color:'#222222',marginRight:'10px',width:'79px',height:'48px'}}>+91</span>  
              </button>
                    <input type="text" placeholder="Number"  style={{ marginLeft: '12px',color:'#EFF1F3',borderRadius:'8px 8px 8px 8px',fontWeight:'14px',width:'211px',height:'48px'}}></input>
                    <Button onClick={bgChange} variant="success" style={{padding:'10px 115px',marginLeft:'100px',marginTop:'20px',borderRadius:'8px 8px 8px 8px'}}>
                        Get OTP
      </Button>
                </Modal.Body>

            
      
            </Modal>

        );
    }

    const secondPage = () => {
        return (

            <>
                <Mobilecartlogin />
            </>

        )
    }



    return (
        <>

            <p onClick={() => setModalShow(true)}>Login/SignUp</p>



            { data ? secondPage() : <><MyVerticallyCenteredModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            /></>}

        </>
    );
}
export default Login  