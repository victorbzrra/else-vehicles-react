import moment from "moment";
import { useState } from "react";
import { CloseOutlined, DeleteOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Upload } from "antd";
import { storage, refer, upload, getUrl } from "../../../../services/firebase";

import { Offer } from "../../interfaces/interfaces";

export function ModalOffer ({ visible, showModal }: Offer) { 
  const [form] = Form.useForm();
  const [urls, setUrls] = useState<string[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const handleChange = (e: any) => {
    const uploadedFiles = [...e.target.files];
    uploadedFiles.map((file) => {
      setImages((prevState) => [...prevState, { file, id: Math.random() }]);
    });
  }

  const handleDelete = () => {
    form.resetFields(["images"])
    setImages([]);
  }

  function handleUpload() {
    images.map((image) => {
      const storageRef = refer(storage, `images/${image.file.name}`);
      const uploadTask = upload(storageRef, image.file);

      uploadTask.on('state_changed',
        async () => {
          await getUrl(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prevState) => [...prevState, downloadURL]);
          })
        }
      )
    })
  }
  
  return (
    <Modal
      okText="Salvar"
      visible={visible}
      onOk={handleUpload}
      onCancel={showModal}
      afterClose={handleDelete}
      okButtonProps={{ icon: <SaveOutlined /> }}
      cancelButtonProps={{ icon: <CloseOutlined /> }}
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
        <Row justify="space-between">
          <Col style={{ marginLeft: 10 }}>
            <Form.Item
              label="Imagens"
              name="images"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira pelo menos duas imagens!",
                },
              ]}
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <Input
                type="file"
                accept=".png,.jpge"
                multiple
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col style={{ marginTop: 40, marginRight: 100, color: "red" }}>
            <DeleteOutlined onClick={handleDelete} />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}