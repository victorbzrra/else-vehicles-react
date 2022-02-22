import { Col, Row, Input, Button, Table } from "antd";
import { PlusOutlined } from '@ant-design/icons';

export function Admin() {
  const { Search } = Input;

  const columns = [
    {
      title: 'Modelo'
    },
    {
      title: 'Marca'
    },
    {
      title: 'Preço'
    },
    {
      title: 'Km'
    },
    {
      title: 'Data'
    },
    {
      title: 'Editar'
    },
    {
      title: 'Excluir'
    }
  ];

  return (
    <>
      <Row justify="space-around" style={{ marginBottom: 50, minWidth: 550 }}>
        <Col xl={6} lg={6}>
          <Search placeholder="Modelo, Marca, Ano, Cor" enterButton />
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />}>
            Nova Oferta
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{minWidth: 550}}>
        <Col md={16} xl={16} lg={16}>
          <Table columns={columns} />
        </Col>
      </Row>
    </>
  );
}