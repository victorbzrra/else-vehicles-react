import { useEffect, useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { Col, Row, Input, Button, Table } from "antd";

import { ModalOffer } from "./components/ModalOffer";
import { columns } from "./components/Columns";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../services/firebase";
import { Offers } from "../../interfaces/interfaces";

export function Admin() {
  const { Search } = Input;
  const [offers, setOffers] = useState<Offers[]>([]);
  const [viewModalOffer, setViewModalOffer] = useState(false);
  
  const offersCollectionRef = collection(database, "offers");

  function showModalOffer() {
    setViewModalOffer(!viewModalOffer);
  }

  useEffect(() => {
    const getOffers = async () => {
      const data = await getDocs(offersCollectionRef);
      setOffers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})));
    };

    getOffers();
  });

  return (
    <>
      <Row justify="space-around" style={{ marginBottom: 50, minWidth: 550 }}>
        <Col xl={6} lg={6}>
          <Search placeholder="Modelo, Marca, Ano, Cor" enterButton />
        </Col>
        <Col>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showModalOffer}
          >
            Nova Oferta
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ minWidth: 550 }}>
        <Col md={16} xl={16} lg={16}>
          <Table columns={columns} dataSource={offers}/>
        </Col>
      </Row>
      <ModalOffer
        visible={viewModalOffer}
        showModal={showModalOffer}
        offersCollectionRef={offersCollectionRef}
      />
    </>
  );
}