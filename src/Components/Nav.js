import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import React from "react";

const Menu = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ marginLeft: 5 }}>
          to visit
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/add/">Add</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/places/">Places</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Menu;
