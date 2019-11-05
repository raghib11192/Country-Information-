import React from "react";
import {Navbar} from 'react-bootstrap'
const Nav=()=>{
    return(
        <div>
            <Navbar expand="lg" variant="light" bg="light" className="nav">
                
                    <Navbar.Brand href="#">Country Information</Navbar.Brand>
                
            </Navbar>
        </div>
    );
}
export default Nav;