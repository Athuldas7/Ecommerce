import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

function Header() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
      <MDBNavbar expand='lg' light bgColor='light' className='custom-navbar'>
          <MDBContainer fluid>
              <i className='fa-solid fa-cart-plus fs-2 m-2'></i>
              <MDBNavbarBrand href='#'>SHOP N SHOP</MDBNavbarBrand>
              <MDBNavbarToggler
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setOpenNavSecond(!openNavSecond)}
              >
                  <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar open={openNavSecond}>
                  <MDBNavbarNav className='justify-content-end'>
                      <MDBNavbarItem>
                          <MDBNavbarLink>
                              <button className='header-button'>
                                  <Link to="/categories">Categories</Link>
                              </button>
                          </MDBNavbarLink>
                      </MDBNavbarItem>

                      <MDBNavbarItem>
                          <MDBNavbarLink>
                              <button className='header-button'>
                                  <Link to="/users">Users</Link>
                              </button>
                          </MDBNavbarLink>
                      </MDBNavbarItem>

                      <MDBNavbarLink active aria-current='page' href='/wishlist'>
                          <i className='fa-solid fa-heart text-danger fs-2'></i>
                      </MDBNavbarLink>
                      <MDBNavbarLink href='/cart'><i className='ms-5 fa-solid fa-cart-plus text-success fs-2'></i> </MDBNavbarLink>
                  </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
      </MDBNavbar>
  );
}

export default Header;

