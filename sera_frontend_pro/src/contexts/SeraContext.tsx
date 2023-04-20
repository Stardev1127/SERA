import { useState, ReactNode, createContext } from 'react';
import { BusinessPartner } from '@/models/applications/business_partner';
import { AuthParty } from '@/models/applications/auth_parties';
import { Proposals, RFQ } from '@/models/applications/contracts';
import { Materials } from '@/models/applications/materials';
import { PurhcaseOrder } from '@/models/applications/purhcase_orders';
import { Invoice } from '@/models/applications/invoices';
import { Token } from '@/models/core-services/token';
import { Shipment } from '@/models/core-services/shipment';
import { Document } from '@/models/core-services/documents';

type SeraContext = {
  openFlag: boolean;
  currentTab: string;
  busPartners: BusinessPartner[];
  authParties: AuthParty[];
  proposals: Proposals[];
  rfqs: RFQ[];
  materials: Materials[];
  purchaseOrders: PurhcaseOrder[];
  invoices: Invoice[];
  tokens: Token[];
  shipments: Shipment[];
  documents: Document[];
  SetBusPartners: (data: BusinessPartner[]) => void;
  SetAuthParties: (data: AuthParty[]) => void;
  SetProposals: (data: Proposals[]) => void;
  SetRFQs: (data: RFQ[]) => void;
  SetMaterials: (data: Materials[]) => void;
  SetPurchaseOrders: (data: PurhcaseOrder[]) => void;
  SetInvoices: (data: Invoice[]) => void;
  SetTokens: (data: Token[]) => void;
  SetShipments: (data: Shipment[]) => void;
  SetDocuments: (data: Document[]) => void;
  SetCurrentTab: (tab: string) => void;
  handleOpenFlag: () => void;
  handleCloseFlag: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SeraContext = createContext<SeraContext>({} as SeraContext);

type Props = {
  children: ReactNode;
};

export function SeraContextProvider({ children }: Props) {
  const [openFlag, setopenFlag] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>('inbox');
  const [busPartners, setBusPartners] = useState<BusinessPartner[]>([]);
  const [authParties, setAuthParties] = useState<AuthParty[]>([]);
  const [proposals, setProposals] = useState<Proposals[]>([]);
  const [rfqs, setRFQs] = useState<RFQ[]>([]);
  const [materials, setMaterials] = useState<Materials[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<PurhcaseOrder[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);

  const SetDocuments = (data: Document[]) => {
    setDocuments(data);
  };

  const SetShipments = (data: Shipment[]) => {
    setShipments(data);
  };

  const SetTokens = (data: Token[]) => {
    setTokens(data);
  };

  const SetInvoices = (data: Invoice[]) => {
    setInvoices(data);
  };

  const SetPurchaseOrders = (data: PurhcaseOrder[]) => {
    setPurchaseOrders(data);
  };

  const SetMaterials = (data: Materials[]) => {
    setMaterials(data);
  };

  const SetRFQs = (data: RFQ[]) => {
    setRFQs(data);
  };

  const SetProposals = (data: Proposals[]) => {
    setProposals(data);
  };

  const SetAuthParties = (data: AuthParty[]) => {
    setAuthParties(data);
  };

  const SetBusPartners = (data: BusinessPartner[]) => {
    setBusPartners(data);
  };

  const SetCurrentTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleOpenFlag = () => {
    setopenFlag(true);
  };

  const handleCloseFlag = () => {
    setopenFlag(false);
  };

  return (
    <SeraContext.Provider
      value={{
        openFlag,
        currentTab,
        busPartners,
        authParties,
        proposals,
        rfqs,
        materials,
        purchaseOrders,
        invoices,
        tokens,
        shipments,
        documents,
        SetAuthParties,
        SetBusPartners,
        SetProposals,
        SetRFQs,
        SetMaterials,
        SetInvoices,
        SetPurchaseOrders,
        SetTokens,
        SetShipments,
        SetDocuments,
        SetCurrentTab,
        handleOpenFlag,
        handleCloseFlag
      }}
    >
      {children}
    </SeraContext.Provider>
  );
}
