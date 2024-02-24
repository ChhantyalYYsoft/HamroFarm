import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../redux/product/productAction";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { TiShoppingCart } from "react-icons/ti";

function ProductLandingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  const { productList } = useSelector((state) => state.productList);

  const { selectedProduct } = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);
  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setCount(inputQuantity);
    }
  };

  // Onclick events for add to cart
  const handleOnClick = async (props) => {
    console.log("hello onclick", props);
    const cartItems = {
      id: props,
      name: "name",
      proce: "price",
      setQuantity: "Qty",
    };
  };
  return (
    <>
      <Header />
      <Container>
        <Row style={{ margin: "1%" }}>
          <Link to="/">
            <Button className="mt-2">Go Back</Button>
          </Link>
        </Row>
        <Row>
          <Col>
            <img src={selectedProduct.thumbnail} alt="" />
          </Col>
          <Col>
            <h3>{selectedProduct.name}</h3>
            <p>Price: {selectedProduct.price}</p>
            <p>Quantity: {selectedProduct.quantity}</p>
            <p>SKU: {selectedProduct.sku}</p>
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
            <br />
            <div>
              <Button
                variant="primary"
                onClick={() => handleOnClick(selectedProduct.id)}
              >
                Add To <TiShoppingCart />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductLandingPage;
