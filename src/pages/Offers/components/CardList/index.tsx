import { Card, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import { Props } from "../../interfaces/interfaces";
import { Offers } from "../../../../interfaces/interfaces";

export function CardList({ offers, showModal }: Props) {
  return (
    <>
      {offers.map((offer: Offers) => (
        <Row justify="center" style={{ marginBottom: 30 }}>
          <Card
            type="inner"
            style={{ minWidth: 550 }}
            onClick={showModal}
            hoverable
          >
            <Row>{`${offer.model}, ${offer.brand}`}</Row>
            <Row>{`R$ ${offer.price} - ${offer.mileage} Km`}</Row>
            <Row justify="space-between">
              <Col>{offer.year}</Col>
              <Col offset={8}>
                {<EyeOutlined />} {offer.views}
              </Col>
            </Row>
          </Card>
        </Row>
      ))}
    </>
  );
}