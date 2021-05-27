import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap"
import { facebook } from "../lib/utils";
import { twitter } from "../lib/utils";
import { Linkdin ,footerimg} from "../lib/utils";
const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4" >
            <h5 style={{ marginLeft: '170px', fontSize: '16px', fontWeight: 'bold', color: '#222222',marginTop:'60px' }}>Categories</h5>
            <ul style={{ marginTop: '20px' }}>
              <ul className="list_item">
                <li style={{ textDecoration: 'underline' }}><a title="1">Men</a>
                </li>
                <li style={{ textDecoration: 'underline' }}><a  >Woman</a>
                </li>
                <li style={{ textDecoration: 'underline' }}><a>Fashion</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Fruits</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Vegatbles</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Beverages</a>
                </li>

              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Cold Drinks</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Bread</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Milk</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Food</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Tea</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Kids</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Kids Care</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Homedecor</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Lights</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Irons</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Stationary</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>MoogDaal</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Cooking Oil</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Salt&Suger</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Ligjts</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Atta</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Tool Dar</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>PersonalCare</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Kitchen</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>HandWash</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Cosmetics</a>
                </li>
              </ul>
              <ul className="list_item">
                <li><a style={{ textDecoration: 'underline' }}>Lipstick</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Appliances</a>
                </li>
                <li><a style={{ textDecoration: 'underline' }}>Snacks</a>
                </li>
              </ul>

            </ul>
          </MDBCol>
          <MDBCol md="4">
            <div style={{marginLeft:'100px'}}>
            <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#222222',marginTop:'60px' }}>Contact Us</h5>
            <h5 style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '30px' }}>Address</h5>
            <p style={{ fontSize: '14px', color: '#222222' }}>SF-22 Shastri Nagar , Ghaziabad.201002</p>
            <h1 style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '14px', color: '#222222' }}>Phone:</h1>
            <p style={{ fontSize: '14px' }}>Toll Free 9988776610</p>
            <h5 style={{ fontWeight: 'bold', marginTop: '16px', fontSize: '14px' }}>email:</h5>
            <p style={{ fontSize: '14px', color: '#222222' }}>info@jprtechnosoft.com</p>
            <img src={facebook} style={{ marginTop: '20px' }} />
            <img src={twitter} style={{ marginLeft: '20px', marginTop: '20px' }} />
            <img src={Linkdin} style={{ marginLeft: '20px', marginTop: '20px' }} />
</div>
          </MDBCol>
          <MDBCol md="4">
            <h5 style={{ fontSize: '16px', fontWeight: 'bold', color: '#222222',marginTop:'60px' }}>Subscribe Newsletter</h5>
            <p style={{ marginTop: '16px', fontSize: '14px' }}>Get all the latest information on Events,Sales and offers
            <br />
            , Sign Up for NewsLetter Today</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1" >

                <Form.Control type="email" placeholder="Email Address" style={{ marginTop: '16px',width:'364px',height:'48px' }} />
                <Button variant="success" size="lg" block style={{ marginTop: '15px', marginTop: '16px', fontSize: '14px',width:'364px',height:'48px' }}>
                  Subscribe
  </Button>
              </Form.Group>
              <img src={footerimg} style={{width:'345px',marginTop:'36px'}} />



            </Form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 black">
        <MDBContainer fluid style={{marginTop:'120px'}} >
          <h5 style={{ background: 'black', color: '#EFF1F3', padding: '10px', fontSize: '16px', fontWeight: 'bold' }}>Chotu
          &copy; {new Date().getFullYear()} All Rights Reserved</h5>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;