import { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { AppstoreOutlined, EyeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { CardGrid } from "./components/CardGrid";
import { CardList } from "./components/CardList";

export function Offers() {
  const [view, setView] = useState(true);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Row style={{ marginBottom: 20 }}>
        <Col offset={23}>
          <Button
            onClick={() => setView(!view)}
            icon={view ? <AppstoreOutlined /> : <UnorderedListOutlined />}
          />
        </Col>
      </Row>
      { view === false 
        ? (
          <CardGrid 
            offers={array}
          />
        )
        : (
          <CardList
            offers={array}
          />
        )
      }
    </>
  );
}