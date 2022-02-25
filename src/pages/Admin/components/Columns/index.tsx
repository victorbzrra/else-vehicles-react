import { Button } from "antd";
import { AlignType } from "rc-table/lib/interface";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { Offers } from "../../../../interfaces/interfaces";

export const columns = [
  {
    title: "Modelo",
    index: "",
    render: (offer: Offers) => <p>{offer.model}</p>,
  },
  {
    title: "Marca",
    index: "",
    render: (offer: Offers) => <p>{offer.brand}</p>,
  },
  {
    title: "Preço",
    index: "",
    render: (offer: Offers) => <p>{offer.price}</p>,
  },
  {
    title: "Km",
    index: "",
    render: (offer: Offers) => <p>{offer.mileage}</p>,
  },
  {
    title: "Data",
    index: "",
    render: (offer: Offers) => <p>{offer.date}</p>,
  },
  {
    width: 50,
    align: "center" as AlignType,
    title: "Editar",
    index: "",
    render: (offer: Offers) => (
      <p>
        <Button
          icon={<EditOutlined />}
          // onClick={}
        />
      </p>
    ),
  },
  {
    width: 50,
    align: "center" as AlignType,
    title: "Excluir",
    index: "",
    render: (offer: Offers) => (
      <p>
        <Button
          icon={<DeleteOutlined />}
          // onClick={}
        />
      </p>
    ),
  },
];