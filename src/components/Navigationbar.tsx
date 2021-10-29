import React from 'react'
import { Navbar, Nav} from 'rsuite';

export default function Navigationbar() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    RSUITE
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>Home</Nav.Item>
                    <Nav.Item>News</Nav.Item>
                    <Nav.Item>Products</Nav.Item>
                    {/* <Dropdown title="About">
                        <Dropdown.Item>Company</Dropdown.Item>
                        <Dropdown.Item>Team</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown> */}
                </Nav>
                <Nav pullRight>
                    <Nav.Item>Settings</Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}
