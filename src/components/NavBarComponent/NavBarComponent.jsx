import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import '../../components/NavBarComponent/Nav.scss'

const  NavBarComponent = () => {
    return (
    <Navbar expand="lg" className="navPrincipal">
        <Container>
        <Navbar.Brand href="#home" className='brand'>GO!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className='NavLink'>Home</Nav.Link>
            <Nav.Link href="#link" className='NavLink'>Marcas</Nav.Link>
            <Nav.Link href="#link" className='NavLink'>Indumentaria</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Running</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Voley</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Basquet</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ciclismo</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>

        <CartWidget/>
        </Container>
    </Navbar>
    );
}

export default NavBarComponent;