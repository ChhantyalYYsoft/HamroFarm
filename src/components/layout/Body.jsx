import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import ExampleCarouselImage from "../Example/ExampleCarouselImage";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategorytAction } from "../../redux/product/productAction";
import ProductListByCategory from "../home/ProductListByCategory";
function Body() {
  const VEG = "fresh-vegetables";
  const FRUIT = "fresh-fruits";
  const HERB = "fresh-herbs";

  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };
  const { productList } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getProductsByCategorytAction());
  }, [dispatch]);

  const freshVegetablesData = productList.filter(
    (item) => item.categorySlug == VEG
  );
  const freshFruitsData = productList.filter(
    (item) => item.categorySlug == FRUIT
  );
  const freshHerbsData = productList.filter(
    (item) => item.categorySlug == HERB
  );

  return (
    <>
      <Container>
        <hr />
        <h2>Fresh Vegetables:</h2>
        <hr />
        <Row>
          {freshVegetablesData.map((veg) => {
            return (
              <Col className="md-3 mt-2 mb-2" key={veg.categorySlug}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={veg.thumbnail} />
                  <Card.Body>
                    <h4>AUD $ {veg.price} </h4>
                    <Card.Title>{veg.name}</Card.Title>
                    <Card.Text>
                      <div className="d-inline-block">
                        <label>
                          Quantity:
                          <input
                            className="qty"
                            type="number"
                            value={count}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </Card.Text>
                    <Button variant="primary">
                      Add To <TiShoppingCart />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <hr />
        <h2>Fresh Fruits:</h2>
        <hr />
        <Row>
          {freshFruitsData.map((fruit) => {
            return (
              <Col className="md-3 mt-2 mb-2" key={fruit.categorySlug}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={fruit.thumbnail} />
                  <Card.Body>
                    <h4>AUD $ {fruit.price} </h4>
                    <Card.Title>{fruit.name}</Card.Title>
                    <Card.Text>
                      <div className="d-inline-block">
                        <label>
                          Quantity:
                          <input
                            className="qty"
                            type="number"
                            value={count}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </Card.Text>
                    <Button variant="primary">
                      Add To <TiShoppingCart />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <hr />
        <h2>Fresh Herbs:</h2>
        <hr />
        <Row>
          {freshHerbsData.map((herb) => {
            return (
              <Col className="md-3 mt-2 mb-2" key={herb.categorySlug}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={herb.thumbnail} />
                  <Card.Body>
                    <h4>AUD $ {herb.price} </h4>
                    <Card.Title>{herb.name}</Card.Title>
                    <Card.Text>
                      <div className="d-inline-block">
                        <label>
                          Quantity:
                          <input
                            className="qty"
                            type="number"
                            value={count}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </Card.Text>
                    <Button variant="primary">
                      Add To <TiShoppingCart />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Body;
