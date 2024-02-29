import React from "react";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/layout/Header";
import { Col, Container, Row, Table } from "react-bootstrap";

function Cart() {
  return (
    <>
      <Header />
      <div className="container main mt-5 px-4">
        <div className="row gx-5">
          <div className="col-8">
            <div className="p-3 border bg-light">
              <Table borderless striped hover>
                {/* <thead>
                  <tr>
                    <th className="xs-2">#</th>
                    <th className="lg xs-8">First Name</th>
                    <th className="sm xs-2">Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>
                      <input type="number" alt="qty"></input>
                    </td>
                    <td>$34</td>
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
          </div>
          <div className="col-4">
            <div className="p-3 border bg-light">
              Amount Calculation:
              <hr />
              <p>$59</p>
              <p>Discount: 0%</p>
              <hr />
              <p>Total Amount: $59</p>`
            </div>
          </div>
        </div>
        <div className=" row mt-4">
          <p className="text-right">
            <button className="float-end">Checkout</button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
