import { EyeOutlined } from "@ant-design/icons";
import { Carousel, Col, Modal, Row, Image } from "antd";

import { ModalProps } from "../../interfaces/interfaces";

import './styles.css'

export function ViewOffer ({ visible, handleViewModal, offer }: ModalProps) { 
  return (
    <Modal visible={visible} onCancel={handleViewModal} footer={false}>
      <Carousel autoplay>
        {offer?.images.map((image) => (
          <div>
            <Image
              width={300}
              src={image}
            />
          </div>
        ))}
      </Carousel>
      <Row justify="space-between" style={{ marginTop: 30 }}>
        <Col className="title">{`${offer?.model}, ${offer?.brand}, ${offer?.year}`}</Col>
        <Col className="title">{`R$ ${offer?.price}`}</Col>
      </Row>
      <Row className="description">{`${offer?.mileage} Km`}</Row>
      <Row>{`${offer?.color} · ${offer?.plate} · ${offer?.city}`}</Row>
      <Row justify="space-between">
        <Col>{`Ofertado em: ${offer?.date}`}</Col>
        <Col>
          <EyeOutlined /> {`${offer?.views}`}
        </Col>
      </Row>
    </Modal>
  );
}