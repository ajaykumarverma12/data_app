import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button,ListGroup } from "react-bootstrap"
import { maggiImage, chilli } from "../lib/utils";
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';
import { minusbutton ,Plusbutton} from "../lib/utils";

const Mycartrouting = () => {
    const [data, showdata] = useState(false);
    const handlepage = () => {
        showdata(false);
        window.location.href = '/mobile';
 
    }


    return (
        <>
        
      

            <MDBContainer fluid className="text-center text-md-left" style={{ marginTop: '70px' }}>
                <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"5px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014',padding:'10px'}}>
                        
                    <div style={{maxHeight:"45px"}}>
     <ListGroup horizontal className="nchange_13" >
  <ListGroup.Item className="listing" style={{border:"none",borderBottom:"5px solid green",color:"#03A305",padding:'15px'}}>My cart</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",padding:'15px'}}>Delivery Address</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",padding:'15px'}}>Date & Time</ListGroup.Item>
  <ListGroup.Item className="listing" style={{border:"none",padding:'15px'}}>Payment</ListGroup.Item>
</ListGroup>
</div>
                </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"20px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014'}}>
                    <MDBRow >

<MDBCol md="5" className="mdcolcss" >
    <span style={{ marginLeft: '139px',color:'#222222',font:'regular',marginTop:'20px' }}>1.</span>
    <img src={maggiImage} className="mycartrouting_img" style={{marginTop:'20px'}} />
    <span style={{ marginLeft: '26px', fontSize: '14px',color:'#222222',font:'Nunito SemiBold' }}>Maggi 2-minute Noodles Masala,70G (Pack of 12)</span>
    <p style={{ marginLeft: '276px', color: 'green', fontSize: '14px',lineHeight:'0.2' }}>135 /-
<span className="MRP_cart_routing" >MRP:150 /-</span>
        <span style={{ marginLeft: '10px', fontSize: '14px' }}>Save 15/-</span>

    </p>
</MDBCol>
<MDBCol md="2" style={{ marginTop: '38px', marginLeft: '65px' }}>
    <p style={{ color: 'red', textDecoration: 'underline', fontSize: '16px' }}>Remove</p>

</MDBCol>
<MDBCol md="4" className="mdcolcss" style={{ marginTop: '38px' }}>
 <img src={minusbutton}  />
    <span style={{ color: 'green', marginLeft: '15px', marginRight:'20px', marginTop: '100px' }} >1</span>
    <img src={Plusbutton} />
    <span style={{ marginLeft: '33px',color:'#222222',font:'regular' }}><ClearIcon /></span>
    <span style={{ marginLeft: '20px',color:'#222222',font:'regular',fontSize:'14px' }}>₹ 135</span>
    <span style={{ marginLeft: '157px' ,color:'#222222',font:'regular',fontSize:'14px'}}>₹ 135</span>
</MDBCol>
</MDBRow>
                </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"20px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014'}}>
                    <MDBRow >

<MDBCol md="5" className="mdcolcss" >
    <span style={{ marginLeft: '139px',color:'#222222',font:'regular',marginTop:'20px' }}>2.</span>
    <img src={chilli} className="mycartrouting_img" style={{marginTop:'20px'}} />
    <span style={{ marginLeft: '26px', fontSize: '14px',color:'#222222',font:'Nunito SemiBold' }}>Red Label Tea Leaf, 1kg</span>
    <p style={{ marginLeft: '280px', color: 'green', fontSize: '14px',lineHeight:'0.1' }}>135 /-
<span className="MRP_cart_routing" >MRP:150 /-</span>
        <span style={{ marginLeft: '10px', fontSize: '14px' }}>Save 15/-</span>

    </p>
</MDBCol>
<MDBCol md="2" style={{ marginTop: '38px', marginLeft: '65px' }}>
    <p style={{ color: 'red', textDecoration: 'underline', fontSize: '16px' }}>Remove</p>

</MDBCol>
<MDBCol md="4" className="mdcolcss" style={{ marginTop: '38px' }}>
 <img src={minusbutton} />
    <span style={{ color: 'green', marginLeft: '15px', marginRight:'20px', marginTop: '100px' }} >1</span>
    <img src={Plusbutton} />
    <span style={{ marginLeft: '33px',color:'#222222',font:'regular' }}><ClearIcon /></span>
    <span style={{ marginLeft: '20px',color:'#222222',font:'regular',fontSize:'14px' }}>₹ 476</span>
    <span style={{ marginLeft: '157px' ,color:'#222222',font:'regular',fontSize:'14px'}}>₹ 476</span>
</MDBCol>
</MDBRow>
                </div>
                    </MDBCol>

                </MDBRow>

                <MDBRow>
                    <MDBCol md="11">
                    <div style={{marginLeft:'150px',marginTop:"1px",borderRadius:'2px 2px 2px 2px',color:'#FFFFFF',opacity:'100%',boxShadow:'0px 2px 8px  #00000014',height:'450px'}}>
                    <MDBRow >
<MDBCol md="2"  >

    <p style={{ marginLeft:'48px', color: '#03A305', fontWeight: 'bold',marginTop:'220px' }}>2 Items</p>
</MDBCol>

<MDBCol md="7" >
</MDBCol>

<MDBCol md="3"  style={{marginTop:'260px'}}>
    <span style={{ fontSize: '14px', color: '#222222' }}>Sub Total:</span>
    <span style={{ marginLeft: '230px', fontSize: '14px', color: '#222222' }}>₹ 615</span>
    <p style={{ marginTop: '8px', fontSize: '14px', color: '#222222' }}>Delivery Charge:
<span style={{ marginLeft: '195px' }}>₹ 0</span>
    </p>
    <p style={{ fontSize: '14px', color: '#222222' }}>Total:
<span style={{ marginLeft: '260px' }}>₹ 615</span>
    </p>
    <Button variant="success" style={{ padding: '8px 150px',borderRadius:'8px 8px 8px 8px',marginTop:'20px' }} onClick={handlepage}>
        Next
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
export default Mycartrouting