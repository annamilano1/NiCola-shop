import { Container, Row, Col } from "react-bootstrap";
import white from "../../images/nicola-lip.png";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <>
      <div className={styles.banner}>
        <Container className="mb-4">
          <Row className="align-items-center">
            <Col md={9}>
              <Container className={styles.container}>
                <h1>
                  <span>Ni</span>cola drinks
                </h1>
                <p className="mr-5">
                  Consuming NiCola applies the Hydration status, increasing max
                  Stamina by 10% and Stamina regen by 50%. The effect lasts 450
                  seconds, which can be prolonged by the Innovation Perk.
                </p>
              </Container>
            </Col>
            <Col md={3}>
              <img className="img-fluid image" src={white} alt="logo" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hero;
