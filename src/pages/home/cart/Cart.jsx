import React from "react";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";
import { Col, Container, Row, Table } from "react-bootstrap";

function Cart() {
  return (
    <>
      <Header />
      <Container className="main mt-5 container-fluid">
        <Row>
          <div className="col-9 px-1 ">
            <Table borderless striped hover>
              <thead>
                <tr>
                  <th className="xs-2">#</th>
                  <th className="lg xs-8">First Name</th>
                  <th className="sm xs-2">Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-3 px-1 offset-9 bg-dark position-fixed">
            <a href="#_" className="nav-link">
              Link
            </a>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
