import {
  Card,
  Container,
  Form,
  Image,
  InputGroup,
  Table,
} from "react-bootstrap";
import "./styles/shirt.css";

export default function AppShirt() {
  const adultData = ["S", "M", "L", "X-Le", "2X-L", "3X-L", "4X-L", "5X-L"];
  const youthData = ["0-2", "3-6", "7-8", "10-12", "S", "M", "L", "X-Le"];
  const styleData = [
    "Short Sleeve",
    "Long Sleeve",
    "Tank Top",
    "Hoodie",
    "Sweatshirt",
    "Raglan",
    "Polo",
    "V-Neck",
    "Crew Neck",
  ];
  const paymentData = ["Cash", "Cheque", "Card", "Bank Transfer", "Others"];
  return (
    <Container fluid className="p-3">
      <div className="general-container">
        <h3 className="industries-name">Timmerman Industries</h3>
        <h1 className="title-holder">T-SHIRT ORDER FORM</h1>
        <hr className="line-break" />
      </div>
      {/* -------------------------- ROW INPUT FORM --------------------------*/}
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
            <label className="form-label">Order Date :</label>
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
            <label className="form-label">Phone :</label>
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
            <label className="form-label">Address :</label>
            <input type="text" className="form-control line-input" />
          </div>
        </div>
      </div>

      {/* -------------------------- ROW RADIO PAYMENT BUTTON --------------------------*/}
      <div className="row form-container radio-container mt-4">
        <div className="radio-payment-section col-11">
          <h4>Payment Method</h4>
          <Form className="radio-payment">
            {paymentData.map((data, i) => (
              <div className="d-flex justify-content-between" key={i}>
                <Form.Check
                  type="radio"
                  label={data}
                  name="paymentRadioMethods" // same group
                  id={`radio-payment-${i}`} // unique id
                  className="custom-radio"
                />
              </div>
            ))}
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
      {/* -------------------------- ROW RADIO STYLE BUTTON --------------------------*/}
      <Form className="radio-grid radio-container">
        {styleData.map((label, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={label}
            name="styleRadioMethods"
            id={`radio-${index}`}
            className="custom-radio"
          />
        ))}
      </Form>

      {/* - ------------------------ TABLE RESULT -------------------------- */}
      <div className="row form-container shirt-option mt-4">
        <div className="col-5">
          <Card>
            {/* image */}
            <div className="card-image">
              <div className="image-icon">
                <i class="fa-solid fa-truck-fast"></i>
              </div>
              <div className="image-icon">
                <i class="fa-brands fa-dropbox"></i>
              </div>
              <div className="image-icon">
                <i class="fa-solid fa-boxes-packing"></i>
              </div>
            </div>

            <div className="date-input">
              <div className="form-group mb-3">
                <label className="form-label">Shipping date :</label>
                <input
                  type="text"
                  className="form-control line-input   shippping-line"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label"> Shipping tracking :</label>
                <input
                  type="text"
                  className="Promise dateform-control line-input shippping-line"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="col-5 offset-1">
          <Table bordered className="text-center table-order">
            <tbody>
              <tr>
                <td>
                  <strong>SUBTOTAL</strong>
                </td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>SHIPPING</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>DISCOUNTS</td>
                <td>-$0.00</td>
              </tr>
              <tr>
                <td>TAXES</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td>
                  <strong>$0.00</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      {/* - ------------------------ NOTES FORM -------------------------- */}
      <div className="row mt-4">
        <div className="col-11">
          <h4>NOTES</h4>
          <InputGroup size="lg" className="notes-form">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
      </div>
      {/* - ------------------------ FOOTER -------------------------- */}
      <div className="row mt-4">
        <h6 className="shirt-footer">
          123-456-789 &nbsp; <a href="www.google.com"> www.form.com </a>&nbsp; |
          city anywhere country anywhere
        </h6>
      </div>
    </Container>
  );
}
