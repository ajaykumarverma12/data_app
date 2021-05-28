import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBNav } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button,ListGroup } from "react-bootstrap"
import HamburgerMenu from '../container/menu/HamburgerMenu';
import Navbar from './Navbar';
import { useState } from 'react';
import {  logged} from "../lib/utils";
const Daterouting = () => {
    const [data, showdata] = useState(true)
    const handleppage = () => {
        showdata(false);
        window.location.href = '/pay';
    }


    return (
        <>
            <HamburgerMenu />


        
            <MDBContainer fluid className="text-center text-md-left" className="mdcolcss1">
            <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"70px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014',padding:'10px'}}>
                    <div style={{maxHeight:"45px",marginBottom:"10px",marginTop:"20px"}}>
     <ListGroup horizontal className="nchange_13" >
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green",color:"#03A305"}}>My cart</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green",color:"#03A305"}}>Delivery Address</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green",color:"#03A305"}}>Date & Time</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none"}}>Payment</ListGroup.Item>
</ListGroup>
</div>  
      
                </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"5px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014',padding:'10px'}}>
         
                    <MDBRow>


<MDBCol md="12" className="mdcolcss">
    <p style={{ marginLeft: '32px', marginTop: '12px', fontSize: '16px', color: '#000000',fontWeight:'Nunito' }}>Delivery Slot</p>
    <MDBNav classicTabs style={{ marginTop: '20px', fontSize: '14px', color: '#000000' }}>
        <span>Mon</span>
        <span  style={{marginLeft:'180px',border:"none",borderBottom:"5px solid green",color:"#03A305",width:'90px',textAlign:'center'}}> Tue
        </span>
        <span   style={{marginLeft:'180px'}}>Wed</span>
        <span  style={{marginLeft:'180px'}}>Thu</span>
        <span style={{marginLeft:'180px'}}>Fri</span>
        <span  style={{marginLeft:'180px'}}>Sat</span>
        <span  style={{marginLeft:'180px'}}>Sun</span>

    </MDBNav>
</MDBCol>

</MDBRow>
                </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11" >
                    <div style={{marginLeft:'150px',marginTop:"5px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014',padding:'10px',height:'500px'}}>
         <MDBRow>
                    <MDBCol md="12" >

                        <MDBNav classicTabs color="orange"  style={{ fontSize: '16px', color: '#222222',marginTop:'20px' }}>
                            <span style={{marginLeft:'2px'}}>22 Feb</span>
                            <span className="day1"style={{marginLeft:'170px',color:'#03A305',fontSize:'16px',font:'Nunito'}}>23 Feb
                            <img src={logged} style={{marginLeft:'10px'}}/>
                            </span>
                            <span className="day1"style={{marginLeft:'170px',color:'#222222',fontSize:'16px',font:'Nunito'}}>24 Feb</span>
                            <span className="day1" style={{marginLeft:'160px'}}>25 Feb</span>
                            <span className="day1" style={{marginLeft:'155px'}}>26 Feb</span>
                            <span className="day1" style={{marginLeft:'147px'}}>27 Feb</span>
                            <span className="day1" style={{marginLeft:'155px'}}>28 Feb</span>

                        </MDBNav>
                    </MDBCol>
                    <div style={{ marginTop: '77px', marginLeft: '15px' }}>
                        <Button variant="outline-success" style={{ marginLeft: '50px',fontSize: '14px',width:'160px',height:'60px' }} >6 am-9 am
                   <span style={{float:'right'}}>

                   {['radio'].map((type) => (
                            <div key={`inline-${type}`} >
                                <Form.Check type={type} id={`inline-${type}-4`} name="formHorizontalRadios" />
                            </div>
                        ))}
                   </span>
                  
                        </Button>{' '}
                    </div>
                    <div style={{ marginTop: '77px' }}>
                        <Button variant="light"  className='btndate'>
                            9 am-1 pm
                            <span style={{float:'right'}}>
                                 {['radio'].map((type) => (
                            <div key={`inline-${type}`} >
                                <Form.Check type={type} id={`inline-${type}-6`} name="formHorizontalRadios" />
                            </div>
                        ))}</span>
                       
                        </Button>{' '}
                    </div>
                    <div style={{ marginTop: '77px' }}>
                        <Button variant="light"  className='btndate'>
                            <span>4 pm-7 pm</span>
                        <span style={{float:'right'}}> {['radio'].map((type) => (
                            <div key={`inline-${type}`} >
                                <Form.Check type={type} id={`inline-${type}-4`} name="formHorizontalRadios" />
                            </div>
                        ))}</span>
                  
                        </Button>{' '}
                    </div>
                    <div style={{ marginTop: '77px' }}>
                        <Button variant="light"  className='btndate'>7 pm- 11 pm
                        <span style={{float:'right'}}>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} >
                                <Form.Check type={type} id={`inline-${type}-4`} name="formHorizontalRadios" />
                            </div>
                        ))}
                        </span>
                  
                        </Button>{' '}


                    </div>

 
                        <div style={{ marginLeft: '460px', marginTop: '380px', float: 'right' }}>
                            <Button variant="success" style={{ padding: '10px 120px', borderRadius: '8px 8px 8px 8px' }} onClick={handleppage} >
                                Next
  </Button>
                        </div>
                
                

                </MDBRow>
                    
                </div>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
               
               
                


            
        </>
    )
};
export default Daterouting