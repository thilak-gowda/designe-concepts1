import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <div className="nv-cont">
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand className='d-md-none d-block text-capatilize' href="#">Design Concepts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="d-flex justify-content-around w-100"

                            navbarScroll
                        >
                            <div className="nav-sec1 d-lg-flex justify-content-around align-items-center w-25">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                            </div>
                            <Navbar.Brand href="#" className='d-md-block d-none brnd-si'>
                                Design Concepts
                            </Navbar.Brand>

                            <div className="nav-sec1 d-lg-flex justify-content-around align-items-center w-25">
                                <Nav.Link href="#" >
                                    Services
                                </Nav.Link>
                                <Nav.Link href="#" >
                                    Contact
                                </Nav.Link>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;