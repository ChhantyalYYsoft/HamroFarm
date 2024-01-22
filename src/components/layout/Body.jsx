import React, { useState } from "react";
import { Button, Card, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ExampleCarouselImage from "../Example/ExampleCarouselImage";

function Body() {
  let [count, setCount] = useState(0);
  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };
  return (
    <>
      <Form.Control
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />

      <Container>
        <Row>
        <Carousel>
          <Carousel.Item interval={1000}>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Row>

        <hr />
        <h2>Fresh Vegetables:</h2>
        <hr />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
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
                  Add To <Icon.Cart4 />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;
