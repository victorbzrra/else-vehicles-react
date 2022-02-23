import { EyeOutlined } from "@ant-design/icons";
import { Carousel, Col, Modal, Row, Image } from "antd";

import { Props } from "../../interfaces/interfaces";

import './styles.css'

export function ViewOffer ({ visible, showModal, offers }: Props) { 
  return (
    <Modal visible={visible} onCancel={showModal} footer={false}>
      <Carousel autoplay>
        <div>
          <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </Carousel>
      <Row justify="space-between" style={{ marginTop: 30 }}>
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