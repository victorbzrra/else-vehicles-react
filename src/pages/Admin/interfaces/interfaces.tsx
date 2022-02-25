import { CollectionReference, DocumentData } from "firebase/firestore";

export interface Offer {
  visible: boolean;
  showModal: () => void;
  offersCollectionRef: CollectionReference<DocumentData>;
}