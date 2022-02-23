import { Offers } from "../../../interfaces/interfaces";

export interface Props {
  offers: Offers[];
  showModal: () => void;
  visible?: boolean;
}