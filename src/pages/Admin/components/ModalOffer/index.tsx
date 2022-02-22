import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Input, InputNumber, Modal, Row } from "antd";
import moment from "moment";
import { Offer } from "../../interfaces/interfaces";

export function ModalOffer ({ visible, showModal }: Offer) { 
  const [form] = Form.useForm();
  
  return (
    <Modal
      visible={visible}
      onCancel={showModal}
      cancelButtonProps={{ icon: <CloseOutlined /> }}
      okText="Salvar"
      okButtonProps={{ icon: <SaveOutlined /> }}
    >
      <Form wrapperCol={{ style: { width: "100%" } }} form={form}>
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item
              label="Modelo"
              name="model"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira o modelo!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              label="Marca"
              name="brand"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira a marca!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={5}>
            <Form.Item
              label="Preço"
              name="price"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira um preço!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <InputNumber
                min={0}
                defaultValue={0}
                formatter={(value) =>
                  `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Km"
              name="mileage"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o Km!",
                },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <InputNumber
                min={0}
                defaultValue={0}
                formatter={(value) =>
                  `${value} KM`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Ano"
              name="year"
              colon={false}
              rules={[{ required: true, message: "Por favor, insira um ano!" }]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <DatePicker
                picker="year"
                placeholder="Ano"
                defaultValue={moment()}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="Cor"
              name="color"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira uma cor!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item
              label="Placa"
              name="plate"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira a placa!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item
              label="Cidade"
              name="city"
              colon={false}
              rules={[
                { required: true, message: "Por favor, insira a cidade!" },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}