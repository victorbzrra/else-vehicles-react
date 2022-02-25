import { useState } from "react";
import { Card, Col, Row } from "antd";
import { ViewOffer } from "../ViewOffer"
import { EyeOutlined } from "@ant-design/icons";

import { GridProps } from "../../interfaces/interfaces";
import { Offers } from "../../../../interfaces/interfaces";

import "../../styles/styles.css";
import { database } from "../../../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

export function CardGrid({ offers }: GridProps) {
  const [offer, setOffer] = useState<Offers>();
  const [viewModal, setViewModal] = useState(false);

  function handleViewModal() {
    setViewModal(!viewModal);
  }

  async function handleOffer(offer: Offers) {
    setOffer(offer);
    handleViewModal();
    
    const offerDoc = doc(database, "offers", offer.id as string);
    await updateDoc(offerDoc, { views: offer.views + 1});
  }
  
  return (
    <>
      <Row justify="space-around">
        {offers?.map((offer: Offers) => (
          <Col offset={1} style={{ marginBottom: 20 }}>
            <Card
              hoverable
              style={{ width: 340 }}
              onClick={() => handleOffer(offer)}
              cover={
                <img
                  alt={`${offer.model}, ${offer.brand}`}
                  src={offer.images[0]}
                />
              }
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
          </Col>
        ))}
      </Row>
      <ViewOffer 
        visible={viewModal}
        handleViewModal={handleViewModal}
        offer={offer}
      />
    </>
  );
}