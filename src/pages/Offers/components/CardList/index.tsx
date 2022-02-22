import { EyeOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Offers } from "../../interfaces/interfaces";

export function CardList({ offers, showModal }: Offers) {
  return (
    <>
      {offers.map(() => (
        <Row justify="center" style={{ marginBottom: 30 }}>
          <Card
            type="inner"
            style={{ minWidth: 550 }}
            onClick={showModal}
            hoverable
          >
            <Row>Modelo, Marca</Row>
            <Row>R$ 10.000 - 120.000 km</Row>
            <Row justify="space-between">
              <Col>2022</Col>
              <Col offset={8}>
                {<EyeOutlined />} 12
              </Col>
            </Row>
          </Card>
        </Row>
      ))}
    </>
  );
}