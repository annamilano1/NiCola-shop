import { Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Alert from "react-bootstrap/Alert";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Container>
        <Row>
          {cart?.list && cart?.list?.length > 0 ? (
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody style={{ verticalAlign: "middle" }}>
                {cart?.list.map((item) => {
                  return <CartItem key={item?.id} data={item} />;
                })}
                <tr style={{ fontSize: 20, textAlign: "right" }}>
                  <td colSpan={3}>Total:</td>
                  <td colSpan={1}>{cart?.total}$</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <Alert variant="warning">
              <h1>Empty bag!</h1>
            </Alert>
          )}
        </Row>
      </Container>
    </>
  );
}
