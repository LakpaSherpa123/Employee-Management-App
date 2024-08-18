import { Container, Nav } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar";
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (

        <Navbar bg="primary" variant ="dark">
            <Container>
                <Navbar.Brand to="/">Employee Management System</Navbar.Brand>
                <Nav className = "ml-auto">

                    <Nav.Link as={Link} to="/" className = "nav-link">Employees</Nav.Link>
                    <Nav.Link as={Link} to="/employee" className = "nav-link">Create Employee</Nav.Link>
                </Nav>
               

            </Container>
            
        </Navbar>
    )
}

export default Header;