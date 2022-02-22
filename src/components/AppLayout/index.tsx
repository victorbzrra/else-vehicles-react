import { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Header>
        <div></div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="/">
            <Link to="/">Ofertas</Link>
          </Menu.Item>
          <Menu.Item key="/admin">
            <Link to="/admin">Administração</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: 0 }}>{children}</Content>
    </Layout>
  );
}