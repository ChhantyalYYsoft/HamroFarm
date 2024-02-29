import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Row,
} from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProductsAction,
  getProductsByCategorytAction,
} from "../../redux/product/productAction";

function ProductDisplay() {
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  const { productList } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };

  const handleOnclick = async (category) => {
    // e.preventDefault(); //it will stop page from refreshing
    if (category == "all") {
      dispatch(getProductsAction());
    } else {
      dispatch(getProductsByCategorytAction(category));
    }
  };
  console.log(productList);
  return (
    <>
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Products</Breadcrumb.Item>
          </Breadcrumb>
        </Row>

        <Row className="mt-5 bg-light border px-3 py-3">
          <Nav justify variant="tabs" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => handleOnclick("all")}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => handleOnclick("fresh-fruits")}
              >
                Fresh Fruits
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                onClick={() => handleOnclick("fresh-vegetables")}
              >
                Fresh Vegetables
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-4"
                onClick={() => handleOnclick("fresh-herbs")}
              >
                Fresh Herbs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="mt-5">
          {productList.map((product) => {
            return (
              <Col className="md-3 mt-2 mb-2" key={product.slug}>
                <Card style={{ width: "18rem" }}>
                  <Link to={`/product/${product.slug}`}>
                    <Card.Img variant="top" src={product.thumbnail} />
                  </Link>
                  <Card.Body>
                    <h4>AUD $ {product.price} </h4>
                    <Card.Title>{product.name}</Card.Title>
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

export default ProductDisplay;
