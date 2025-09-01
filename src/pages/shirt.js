import { Container, Form, Image, Table } from "react-bootstrap";
import "./styles/shirt.css";
import React from "react";

export default function AppShirt() {
  const adultData = ["S", "M", "L", "X-Le", "2X-L", "3X-L", "4X-L", "5X-L"];
  const youthData = ["0-2", "3-6", "7-8", "10-12", "S", "M", "L", "X-Le"];
  return (
    <Container fluid className="p-3">
      <div className="general-container">
        <h3 className="industries-name">Timmerman Industries</h3>
        <h1 className="title-holder">T-SHIRT ORDER FORM</h1>
        <hr className="line-break" />
      </div>
      {/* -------------------------- ROW 1 --------------------------*/}
      <div className="row form-container">
        <div className="form-section col-5">
          <div className="form-group mb-3">
            <label className="form-label">Name :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
        <div className="form-section col-5 offset-1">
          <div className="form-group mb-3">
            <label className="form-label">Order :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
      </div>

      {/* -------------------------- ROW 2 --------------------------*/}
      <div className="row form-container">
        <div className="form-section col-5">
          <div className="form-group mb-3">
            <label className="form-label date-input">Order Date :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
        <div className="form-section col-5 offset-1">
          <div className="form-group mb-3">
            <label className="form-label">Promise date :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
      </div>

      {/* -------------------------- ROW 3 --------------------------*/}
      <div className="row form-container">
        <div className="form-section col-5">
          <div className="form-group mb-3">
            <label className="form-label date-input">Phone :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
        <div className="form-section col-5 offset-1">
          <div className="form-group mb-3">
            <label className="form-label">Email :</label>
            <input type="email" className="form-control line-input" />
          </div>
        </div>
      </div>

      {/* -------------------------- ROW 4 --------------------------*/}
      <div className="row form-container">
        <div className="form-section col-11">
          <div className="form-group mb-3">
            <label className="form-label date-input">Address :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
      </div>

      {/* -------------------------- ROW RADIO BUTTON --------------------------*/}
      <div className="row form-container radio-container mt-4">
        <div className="radio-section col-11">
          <Form className="d-flex justify-content-between">
            <Form.Check
              type="radio"
              label="Bank Transfer"
              name="exampleRadios"
              id="radio1"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Card"
              name="exampleRadios"
              id="radio2"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Cash"
              name="exampleRadios"
              id="radio3"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Cheque"
              name="exampleRadios"
              id="radio2"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Others"
              name="exampleRadios"
              id="radio3"
              className="custom-radio"
            />
          </Form>
        </div>
      </div>

      {/* -------------------------- SHIRT OPTION --------------------------*/}
      <div className="row form-container shirt-option mt-4">
        <div className="col-5">
          <Table bordered hover>
            <thead>
              <tr>
                <th className="text-center">Adult</th>
                <th className="text-center">Youth</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {adultData.map((size, index) => (
                <tr key={index}>
                  {/* Adult column */}
                  <td className="table-data">
                    <Form.Check
                      type="checkbox"
                      id={`adult-${index}`}
                      className="checkbox"
                      label={size}
                    />
                  </td>
                  <td className="youth-data">
                    <Form.Check
                      type="checkbox"
                      id={`adult-${index}`}
                      label={youthData[index]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="col-5">
          <Image src={require("../assets/shirt.png")} />
        </div>
      </div>
    </Container>
  );
}
