import React from 'react';
import { } from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import '../App.css';


function MenuBottom() {
  return (
    <>


          <div  style={{color: '#FFFFFF', boxShadow: '0px 4px 8px  #00000014',marginTop:'80px' }}>

      <Navbar bg="light" expand="lg" style={{ marginLeft: '189px' }} >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Fruits & Vegetables" id="basic-nav-dropdown" style={{ fontWeight: 'bold', fontSize: '14px' }}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Grocery" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Men" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Women" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Beverages" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Juice</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cold drink</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Baby&Kids" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Baby Food</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">pampers</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Home&Kitchen" id="basic-nav-dropdown" className="weight_value" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Cosmetics" id="basic-nav-dropdown" className="weight_value">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Pet Care" id="basic-nav-dropdown" className="weight_value" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      </div>

    </>
  )

}
export default MenuBottom;