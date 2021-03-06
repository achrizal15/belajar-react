import React, { useContext } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { KeranjangContext } from "../App";
import Total from "./Total";

function HomePage() {
  const keranjang = useContext(KeranjangContext);
  return (
    <Container>
      <hr />
      <Row>
        <Col sm={5}>
          <Card>
            <Card.Img variant="top" src="https://www.fillmurray.com/640/360" />
          </Card>
        </Col>
        <Col>
          <h4>Lukisan Langkah Jaman Majapahit</h4>
          <p><Link to='/bacanews'>Pelajari</Link></p>
          <sub style={{ fontSize: 15 }}>Harga</sub>
          <h5>Rp.1000</h5>
          <Row>
            <Col sm={5}>
              <sub style={{ fontSize: 15 }}>Jumlah</sub>
              <ButtonGroup size="sm" className="mt-1 btn-block">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => keranjang.setValue("kurangi")}
                >
                  -
                </Button>
                <Button
                  className="w-75 font-weight-bold"
                  disabled
                  variant="transparent"
                >
                  {keranjang.value.jumlah}
                </Button>
                <Button
                  variant="success"
                  onClick={() => keranjang.setValue("tambah")}
                >
                  +
                </Button>
              </ButtonGroup>
              <Link  to="/total">Rp.{keranjang.value.total}</Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Total/>
    </Container>
  );
}

export default HomePage;
