import React, { useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap"
import { } from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { cartvalue, maggiImage, deleteImage } from "./lib/utils";
import { minus, pay,minusbutton ,Plusbutton,cross} from "./lib/utils";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import Firstcart from "./component/Firstcart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Mainfile from "./component/Mainfile";
// import Navbar from "./component/Navbar";

const CartValue = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);

    const [data, setData]=useState(true);
    const ref = useRef(null);


    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
   

    const handlePage=()=>{
     setData(false);
     window.location.href = '/cart'   
    }


    return (
        <>
            <div ref={ref}>
                <p onClick={handleClick}>Cart</p>

                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={50}
                >
                    <Popover id="popover-contained"  >
                        <Popover.Title as="h2" style={{ background: '#03A305', color: 'white', width: '505px', padding: '15px' }}>
                            <img src={cartvalue} /> 
                            
                            <span style={{fontSize:'16px',color:'#FFFFFF',fontSize:'bold'}} >My Cart</span>
                            <img src={cross}  style={{float:'right'}}/>
                            </Popover.Title>
                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                            <div style={{borderRadius: '2px 2px 2px 2px', boxShadow: '0px 2px 8px  #00000014',paddingBottom:'16px'}}>
                            <strong >
                                <img src={maggiImage} style={{ height: '60px' }} />
                            </strong> <span  style={{fontSize:'12px',marginLeft:'16px'}}>Maggi 2-minute Noodles Masala , 70G(Pack of 12)</span> 
            <img src={deleteImage} style={{ marginLeft: '100px' }} />
            <img src={minusbutton}  style={{ marginLeft: '76px' }} />

                            <span style={{ marginLeft: '15px' }}>1</span>
                            <img src={Plusbutton} style={{ marginLeft: '15px' }}/>

                            <CloseIcon style={{ marginLeft: '16px' }}></CloseIcon>
                            <span style={{ marginLeft: '16px' }}>₹ 135</span>
                            <span style={{ marginLeft: '180px', fontWeight: 'bold',fontSize:'14px',color:'#222222' }}>135 /-</span>
                        </div>
                        </Popover.Content>
                        
                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                        <div style={{borderRadius: '2px 2px 2px 2px', boxShadow: '0px 2px 8px  #00000014',paddingBottom:'16px',marginBottom:'260px'}}>

                            <strong >
                                <img src={maggiImage} style={{ height: '60px' }} />
                            </strong> <span  style={{fontSize:'12px',marginLeft:'16px'}}>Maggi 2-minute Noodles Masala , 70G(Pack of 12)</span> 
            <img src={deleteImage} style={{ marginLeft: '100px' }} />
            <img src={minusbutton}  style={{ marginLeft: '76px' }} />

                            <span style={{ marginLeft: '15px' }}>1</span>
                            <img src={Plusbutton} style={{ marginLeft: '15px' }}/>

                            <CloseIcon style={{ marginLeft: '16px' }}></CloseIcon>
                            <span style={{ marginLeft: '16px' }}>₹ 135</span>
                            <span style={{ marginLeft: '180px', fontWeight: 'bold',fontSize:'14px',color:'#222222' }}>135 /-</span>
                       </div>
                        </Popover.Content>
                    

                        <Popover.Content style={{ width: '505px', background: 'white' }}>
                        <div style={{ boxShadow: '0px 2px 8px  #00000014'}}>

                            <p style={{ marginTop: '160px', fontWeight: 'bold', fontSize: '14px',color:'#222222' }}>Sub Total
                             <span style={{ float: 'right' }}>360 /-</span></p>
                            <p style={{ fontWeight: 'bold', fontSize: '14px',marginTop:'13px', fontSize: '14px',color:'#222222' }}>Delivery Charges
                             <span style={{ float: 'right' }}>49 /-</span></p>

                             </div>
                            <p style={{ fontWeight: 'bold', fontSize: '14px', fontSize: '14px',color:'#222222' }}> Total
                             <span style={{ float: 'right' }}>409 /-</span></p>
                        </Popover.Content>
                        <Popover.Content style={{width: '505px', background: 'white' }}>

  
                            <Button  variant="success" style={{width:'490px',height:'48px'}} onClick={handlePage} >
      <MDBRow>
          <MDBCol md="2" >
          <span style={{ marginRight: '0px', fontSize: '12px',color:'#FFFFFF',fontWeight:'Nunito' }}>2 Items </span>
          <p style={{width:'32',height:'16px',fontSize:'12px',fontWeight:'Nunito',marginPadding:'20px'}}>409 /-</p>
          </MDBCol>
          <MDBCol md="8" style={{marginTop:'8px'}} >
          <span style={{ marginRight: '0px', fontSize: '16px',color:'#FFFFFF',fontWeight:'Nunito' }}>Proceed To Pay </span>
          </MDBCol>
          <MDBCol md="2" style={{marginTop:'8px'}} >
          <img src={pay} style={{backgroundColor:'white'}} /> 
          </MDBCol>
      </MDBRow>
       
         
      
                                
                                {/* <span style={{ marginRight: '0px', fontSize: '12px',color:'#FFFFFF' }}>2 Items </span>
                                <p>409 /-</p>
  <span style={{fontSize:'16px',transform:'titlecase',color:'#FFFFFF'}}> Proceed To Pay</span> 
     */}
                            </Button>
                        </Popover.Content>

                    </Popover>
                </Overlay>

               

            </div>


        </>
    )
}
export default CartValue