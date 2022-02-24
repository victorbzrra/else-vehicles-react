import { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { Col, Row, Input, Button, Table } from "antd";

import { ModalOffer } from "./components/ModalOffer";
import { columns } from "./components/Columns";

export function Admin() {
  const { Search } = Input;
  const [viewModalOffer, setViewModalOffer] = useState(false);

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
          <Table columns={columns} />
        </Col>
      </Row>
      <ModalOffer
        visible={viewModalOffer}
        showModal={showModalOffer}
      />
    </>
  );
}