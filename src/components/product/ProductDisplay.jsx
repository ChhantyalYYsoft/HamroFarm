import React, { useState } from "react";
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

function ProductDisplay() {
  let [count, setCount] = useState(0);
  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };
  return (
    <>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Today's Special</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Fresh Fruits</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Fresh Vegetables</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Fresh Herbs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col className="md-3 mt-2 mb-2">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/bok-choy-e1631955525816-300x300.jpg"
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
                src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/bok-choy-e1631955525816-300x300.jpg"
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
                src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/bok-choy-e1631955525816-300x300.jpg"
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
                src="https://www.farmerandson.com.au/wp-content/uploads/2021/08/bok-choy-e1631955525816-300x300.jpg"
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
      </Container>
    </>
  );
}

export default ProductDisplay;
