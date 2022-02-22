import { EyeOutlined } from "@ant-design/icons";
import { Carousel, Col, Modal, Row } from "antd";
import { Offers } from "../../interfaces/interfaces";

import './styles.css'

export function ViewOffer ({ visible, showModal, offers}: Offers) { 
  return (
    <Modal visible={visible} onCancel={showModal} footer={false}>
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <Row justify="space-between" style={{marginTop: 30}}>
        <Col>Modelo, Marca, Ano</Col>
        <Col>R$ 10.000,00</Col>
      </Row>
      <Row>100.000 KM</Row>
      <Row>Azul * ESM - 9001 * Russas * Ceará</Row>
      <Row justify="space-between">
        <Col>Ofertado em: 22/02/2022</Col>
        <Col>
          <EyeOutlined /> 12
        </Col>
      </Row>
    </Modal>
  );
}