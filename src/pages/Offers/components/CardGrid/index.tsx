import { Card, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import { Props } from "../../interfaces/interfaces";
import { Offers } from "../../../../interfaces/interfaces";

export function CardGrid({ offers, showModal }: Props) {
  return (
    <Row justify="space-around">
      {offers.map((offer: Offers) => (
        <Col offset={1} style={{ marginBottom: 20 }}>
          <Card
            hoverable
            style={{ width: 340 }}
            onClick={showModal}
            cover={
              <img
                alt={`${offer.model}, ${offer.brand}`}
                src={offer.images[0]}
              />
            }
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
        </Col>
      ))}
    </Row>
  );
}