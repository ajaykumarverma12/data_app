import React from 'react'
import { Button, Modal, Form, Col, InputGroup, FormControl } from "react-bootstrap"
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { mobilesign } from "../lib/utils";
import AddIcon from '@material-ui/icons/Add';
import { SpaRounded } from '@material-ui/icons';

function MyVerticallyCenteredModal(props) {
    return (
        <>
            <div style={{ borderRadius: '20px 8px 8px 20px' }}>
                <Modal

                    {...props}

                    centered
                >


                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter"
                            style={{ fontWeight: 'bold', padding: '0px 130px', marginTop: '30px', fontSize: '20px', color: '#03A305' }}>
                            Add New Address
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p style={{ fontSize: '16px', color: '#222222', marginLeft: '29px' }}>Enter Accurate Address To Get Delivery Fast To Your Door  </p>
                        <Form>
                            <Form.Row className="align-items-center">
                                <Col ls="auto">
                                    <Form.Label style={{ marginTop: '10px', marginLeft: '15px', fontSize: '14px', color: '#222222' }}>Area/Locality</Form.Label>

                                    <Form.Control style={{ marginLeft: '15px' }}
                                        className="mb-2"
                                        placeholder="Search Area"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="outline-success" style={{ marginTop: '32px', marginLeft: '15px' }}>Get Location</Button>{' '}
                                </Col>
                            </Form.Row>
                            <Form.Group >
                                <Form.Label style={{ marginTop: '28px', marginLeft: '15px', fontSize: '14px', color: '#222222' }}>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" style={{ marginLeft: '15px' }} />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{ marginTop: '25px', marginLeft: '15px', fontSize: '14px', color: '#222222' }}>Complete Address</Form.Label>
                                <Form.Control type="text" placeholder="Enetr Complete Address" style={{ marginLeft: '15px' }} />
                            </Form.Group>
                            <div style={{ marginTop: '35px', marginLeft: '15px' }}>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline Label="1" type={type} id={`inline-${type}-1`} name="formHorizontalRadios" />Home
                                        <Form.Check inline Label="1" type={type} id={`inline-${type}-1`} style={{ marginLeft: '35px' }} name="formHorizontalRadios" />Office
                                        <Form.Check inline Label="1" type={type} id={`inline-${type}-1`} style={{ marginLeft: '35px' }} name="formHorizontalRadios" />Other
                                    </div>
                                ))}
                            </div>

                            <center><Button variant="success" style={{ padding: '10px 70px', marginTop: '35px', borderRadius: '8px 8px 8px 8px' }}>Continue Shopping</Button> </center>

                        </Form>

                    </Modal.Body>


                </Modal>
            </div>
        </>
    );
}

function Addaddress() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-success" style={{ marginLeft: '70px' }}><AddIcon />
            </Button >{' '}
            <span style={{ color: 'green', marginLeft: '40px' }} onClick={() => setModalShow(true)}>Add Another/New Address</span>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default Addaddress  