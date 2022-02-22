import { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { AppstoreOutlined, EyeOutlined, UnorderedListOutlined } from "@ant-design/icons";

export function Offers() {
  const [view, setView] = useState(false);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Row style={{ marginBottom: 20 }}>
        <Col offset={23}>
          <Button
            onClick={() => setView(!view)}
            icon={view ? <AppstoreOutlined /> : <UnorderedListOutlined />}
          />
        </Col>
      </Row>
      <Row justify="space-around">
        {array.map(() => (
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
    </>
  );
}