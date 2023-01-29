import React from 'react';
import { Nav,Logo,Menu,Option } from "../styles/Navbar.styled";

export const Navbar = () => {
    return (
        <>
    
          <Nav>
            <Logo>Trends</Logo>
            <Menu>
              <Option>Home</Option>
              <Option>About</Option>
              <Option>Products</Option>
            </Menu>
            
            </Nav>
        </>
      );
    }
