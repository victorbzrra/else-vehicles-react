import { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import "./styles.css";

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  const { Header, Content } = Layout;

  return (
    <div style={{ height: "100%" }}>
      <Header>
        <div className="logo">ELSE VEÍCULOS</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="/">
            <Link to="/">Ofertas</Link>
          </Menu.Item>
          <Menu.Item key="/admin">
            <Link to="/admin">Administração</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="content">{children}</div>
      </Content>
    </div>
  );
}