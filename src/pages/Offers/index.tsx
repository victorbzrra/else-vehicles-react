import { useState } from "react";
import { Button, Col, Row } from "antd";

import { CardGrid } from "./components/CardGrid";
import { CardList } from "./components/CardList";
import { ViewOffer } from "./components/ViewOffer";

import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";


export function Offers() {
  const [view, setView] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function showModal() {
    setViewModal(!viewModal);
  }

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
            showModal={showModal}
          />
        )
        : (
          <CardList
            offers={array}
            showModal={showModal}
          />
        )
      }
      <ViewOffer 
        visible={viewModal} 
        showModal={showModal}
        offers={array}
      />
    </>
  );
}