import { useState } from "react";
import { Card, Col, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import { GridProps } from "../../interfaces/interfaces";
import { Offers } from "../../../../interfaces/interfaces";
import { ViewOffer } from "../ViewOffer";
import { database } from "../../../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

export function CardList({ offers }: GridProps) {
  const [viewModal, setViewModal] = useState(false);

  function handleViewModal() {
    setViewModal(!viewModal);
  }

  async function handleOffer(offer: Offers) {
    handleViewModal();

    const offerDoc = doc(database, "offers", offer.id as string);
    await updateDoc(offerDoc, { views: offer.views + 1});
  }
  
  return (
    <>
      {offers.map((offer: Offers) => (
        <>
          <Row justify="center" style={{ marginBottom: 30 }}>
            <Card
              type="inner"
              style={{ minWidth: 550 }}
              onClick={() => handleOffer(offer)}
              hoverable
            >
              <Row className="title">{`${offer.model}, ${offer.brand}`}</Row>
              <Row className="description">{`R$ ${offer.price} - ${offer.mileage} Km`}</Row>
              <Row justify="space-between">
                <Col>{offer.year}</Col>
                <Col offset={8}>
                  {<EyeOutlined />} {offer.views}
                </Col>
              </Row>
            </Card>
          </Row>
          <ViewOffer
            visible={viewModal}
            handleViewModal={handleViewModal}
            offer={offer}
          />
        </>
      ))}
    </>
  );
}