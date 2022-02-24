import { Offers } from "../../../interfaces/interfaces";

export interface GridProps {
  offers: Offers[];
}

export interface ModalProps {
  offer: Offers | undefined;
  handleViewModal: () => void;
  visible: boolean;
}