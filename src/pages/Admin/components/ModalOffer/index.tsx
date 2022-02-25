import moment from "moment";
import { useState } from "react";
import { CloseOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Input, InputNumber, Modal, Row } from "antd";
import { storage, refer, upload, getUrl } from "../../../../services/firebase";

import { Offer } from "../../interfaces/interfaces";
import { addDoc } from "firebase/firestore";
import { Offers } from "../../../../interfaces/interfaces";

export function ModalOffer ({ visible, showModal, offersCollectionRef }: Offer) { 
  const [form] = Form.useForm();
  const [urls, setUrls] = useState<string[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const handleChange = (e: any) => {
    const uploadedFiles = [...e.target.files];
    uploadedFiles.forEach((file) => {
      setImages((prevState) => [...prevState, { file, id: Math.random() }]);
    });
  }

  const handleDeleteImages = () => {
    form.resetFields(["images"])
    setImages([]);
  }

  const handleDeleteUrls = () => {
    setUrls([]);
  }

  function handleUpload() {
    images.forEach((image) => {
      const storageRef = refer(storage, `images/${image.file.name}`);
      const uploadTask = upload(storageRef, image.file);

      uploadTask.on('state_changed',
        async () => {
          await getUrl(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      )
    })
  }

  async function createOffer() {
    const offer: Offers = {
      model: form.getFieldValue("model"),
      brand: form.getFieldValue("brand"),
      price: form.getFieldValue("price"),
      mileage: form.getFieldValue("mileage"),
      color: form.getFieldValue("color"),
      city: form.getFieldValue("city"),
      plate: form.getFieldValue("plate"),
      views: 0,
      images: urls,
      date: moment().format("DD/MM/YYYY"),
      year: moment(form.getFieldValue("year")).format("YYYY")
    }

    try {
      await form.validateFields()
        .then(async () => await addDoc(offersCollectionRef, offer))
        .then(() => showModal());
    } finally {
      handleDeleteImages();
      handleDeleteUrls();
    }
  } 
  
  return (
    <Modal
      okText="Salvar"
      visible={visible}
      onOk={createOffer}
      onCancel={showModal}
      afterClose={handleDeleteImages}
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
        <Row justify="start">
          <Col style={{ marginLeft: 10}}>
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
          <Col style={{color: "green", marginTop: 40, marginLeft: 10}}>
            <SaveOutlined onClick={handleUpload} />
          </Col>
          <Col style={{color: "red", marginTop: 40, marginLeft: 10}}>
            <DeleteOutlined onClick={handleDeleteImages} />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}