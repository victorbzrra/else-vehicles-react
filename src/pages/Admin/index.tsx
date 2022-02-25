import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { AlignType } from "rc-table/lib/interface";
import { Col, Row, Input, Button, Table } from "antd";

import { database } from "../../services/firebase";
import { Offers } from "../../interfaces/interfaces";
import { ModalOffer } from "./components/ModalOffer";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";


export function Admin() {
  const { Search } = Input;
  const [offers, setOffers] = useState<Offers[]>([]);
  const [viewModalOffer, setViewModalOffer] = useState(false);
  
  const offersCollectionRef = collection(database, "offers");

  const columns = [
    {
      title: "Modelo",
      index: "",
      render: (offer: Offers) => <p>{offer.model}</p>,
    },
    {
      title: "Marca",
      index: "",
      render: (offer: Offers) => <p>{offer.brand}</p>,
    },
    {
      title: "Preço",
      index: "",
      render: (offer: Offers) => <p>{offer.price}</p>,
    },
    {
      title: "Km",
      index: "",
      render: (offer: Offers) => <p>{offer.mileage}</p>,
    },
    {
      title: "Data",
      index: "",
      render: (offer: Offers) => <p>{offer.date}</p>,
    },
    {
      width: 50,
      align: "center" as AlignType,
      title: "Editar",
      index: "",
      render: (offer: Offers) => (
        <p>
          <Button
            icon={<EditOutlined />}
            // onClick={}
          />
        </p>
      ),
    },
    {
      width: 50,
      align: "center" as AlignType,
      title: "Excluir",
      index: "",
      render: (offer: Offers) => (
        <p>
          <Button
            icon={<DeleteOutlined />}
            onClick={async () => {
              const offerDoc = doc(database, "offers", offer?.id as string);
              await deleteDoc(offerDoc);
            }}
          />
        </p>
      ),
    },
  ];

  useEffect(() => {
    const getOffers = async () => {
      try {
        const data = await getDocs(offersCollectionRef);
        setOffers(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id})));
      } catch (err) {
        console.log(err);
      }
    };

    getOffers();
  }, [offers]);

  function showModalOffer() {
    setViewModalOffer(!viewModalOffer);
  }

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