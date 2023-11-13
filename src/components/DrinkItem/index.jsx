import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import styles from "./Drink.module.css";
import Card from "react-bootstrap/Card";

export default function Drink({ data }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
   
  };

  return (
    <>
      <Card className={styles.card} style={{ maxWidth: "18rem" }}>
        <Card.Img variant="top" src={data.imageUrl} className={styles.image} />
        <Card.Body className={styles.body}>
          <Card.Title className={styles.title}>{data.name}</Card.Title>
          <Card.Text className={styles.description}>
            {data.description}
            <br />
            <span>{data.price}€$</span>
          </Card.Text>

          <Button className={styles.but} onClick={handleAddToCart}>
            buy it!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
