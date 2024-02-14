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
function ProductListByCategory() {
  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };

  return (
    <>
      {console.log("Hello11", productList)}
      <hr />
      <h2>Fresh Vegetables:</h2>
      <hr />
      <Row>
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <h4>AUD $5 </h4>
              <Card.Title>Name</Card.Title>
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
      </Row>
      <hr />
      <h2>Fresh Fruits:</h2>
      <hr />
      <Row>
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2023/11/IMG_7007-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>BOK CHOY – BUNCH</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2023/11/IMG_7007-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>BOK CHOY – BUNCH</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2023/11/IMG_7007-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>BOK CHOY – BUNCH</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2023/11/IMG_7007-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>BOK CHOY – BUNCH</Card.Title>
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
      </Row>
      <hr />
      <h2>Fresh Herbs:</h2>
      <hr />
      <Row>
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/dill-2500-56a20f953df78cf772718536-e1631950838366-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>Dill - Bunch</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/dill-2500-56a20f953df78cf772718536-e1631950838366-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>Dill - Bunch</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/dill-2500-56a20f953df78cf772718536-e1631950838366-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>Dill - Bunch</Card.Title>
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
        <Col className="md-3 mt-2 mb-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/dill-2500-56a20f953df78cf772718536-e1631950838366-300x300.jpg"
            />
            <Card.Body>
              <h4>AUD $5 per kg</h4>
              <Card.Title>Dill - Bunch</Card.Title>
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
      </Row>
    </>
  );
}

export default ProductListByCategory;
