import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Icon from "react-icons/fi";
import { KeranjangContext } from "../App";

function Header() {
  const keranjang = useContext(KeranjangContext);
  return (
    <div>
      <Navbar bg="light">
        <NavLink to="/" className="navbar navbar-brand">
          ReactACH
        </NavLink>
        <Nav navbar className="ml-auto">
          <Nav.Item>
            <NavLink to="/About" className="nav-link">
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Pengaturan">
              <NavLink to="/Pengaturan" className="dropdown-item">
                Akun
              </NavLink>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        <Navbar.Text>
          <Button
            variant="bg-transparent"
            className="btn btn-outline-success font-weight-bolder "
          >
            <Icon.FiShoppingCart size={20} color="green" />
            <span></span>{keranjang.value.jumlah}
          </Button>
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default Header;
