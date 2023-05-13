import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootsra'

function App() {

  return (
    <>
       <Navbar variant="dark" bg="dark"> 
        <Container>
          <Navbar.Brand>RideHive</Navbar.Brand>
          <Nav>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App
