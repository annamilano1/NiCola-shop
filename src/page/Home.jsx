import { Container, Row } from "react-bootstrap";
import Drink from "../components/DrinkItem/index";
import { productList } from "../data/products";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <>
      <Hero> </Hero>

      <Container>
        <Row className="justify-content-center">
          {productList.map((item) => {
            return <Drink data={item} />;
          })}
        </Row>
      </Container>
    </>
  );
}

