import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo-sticker.png";
import styles from "./Header.module.css";

export default function Header() {
  const { list } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar
        className={styles.header}
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
      >
        <Container className="justify-content-start" fluid="md">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="90"
              height="90"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/" className={styles.menuLink}>
                Home
              </Link>

              <Link to="/cart" className={styles.menuLink}>
                Bag <span>{list?.length}</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

/* 
<Navbar expand="lg"  className={styles.header}>
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
            <Link to="/"><h1>home</h1></Link>
                    <Link to="/cart" >carrello <span>{list?.length}</span></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
*/
