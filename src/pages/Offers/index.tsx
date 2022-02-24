import { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";

import { CardGrid } from "./components/CardGrid";
import { CardList } from "./components/CardList";
// import { ViewOffer } from "./components/ViewOffer";

import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { database } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Offers } from "../../interfaces/interfaces";

export function OffersPage() {
  const [view, setView] = useState(false);
  const [offers, setOffers] = useState<Offers[]>([]);

  const offersCollectionRef = collection(database, "offers");

  useEffect(() => {
    const getOffers = async () => {
      const data = await getDocs(offersCollectionRef);
      setOffers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})));
    };

    getOffers();
  });

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
      { view === false 
        ? (
          <CardGrid 
            offers={offers}
            // showModal={showModal}
          />
        )
        : (
          <CardList
            offers={offers}
            // showModal={showModal}
          />
        )
      }
      {/* <ViewOffer 
        visible={viewModal} 
        showModal={showModal}
        offers={offers}
      /> */}
    </>
  );
}