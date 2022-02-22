import { EyeOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";

import { Offers } from "../../interfaces/interfaces";

export function CardGrid({ offers }: Offers) {
  return (
    <Row justify="space-around">
      {offers.map(() => (
        <Col offset={1} style={{ marginBottom: 20 }}>
          <Card
            hoverable
            style={{ width: 340 }}
            // cover={}
          >
            <Row>Modelo, Marca</Row>
            <Row>R$ 10.000 - 120.000 km</Row>
            <Row justify="space-between">
              <Col>2022</Col>
              <Col offset={8}>
                <Button shape="round" icon={<EyeOutlined />}>
                  12
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}