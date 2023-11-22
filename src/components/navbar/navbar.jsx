import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      
      <Navbar  className='daisy' style={{backgroundColor:'#d8363a'}}>
        <Container class="navc">
          <Navbar.Brand href="#home" style={{color:'white'}}>MEDFLIX</Navbar.Brand>
          <Nav className="me-auto" style={{marginLeft: '70%'}}>
            <Link to='/' style={{color:'white' , paddingLeft:'10px'}}>Home</Link> 
            <Link to='/' style={{color:'white' , paddingLeft:'10px'}}>Features</Link>
            <Link to='/' style={{color:'white' , paddingLeft:'10px'}}>CART</Link>
            <Link to='/login' style={{color:'white' , paddingLeft:'10px'}}>Login</Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;