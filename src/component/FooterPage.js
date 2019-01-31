import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer
        style={{ backgroundColor: "#f8f8f8" }}
        color="blue"
        className="font-small pt-4 mt-4"
      >
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <ul>
                <li className="list-unstyled">
                  <p>Contact me with a DM:</p>
                  <a href="http://instagram/forfortsakes">@forforsakes</a>
                </li>
              </ul>
              <div>
                Developed with 🍕by{" "}
                <a href="https://github.com/evmarts"> evmarts </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
