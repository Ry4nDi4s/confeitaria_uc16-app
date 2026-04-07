type Pedidos = {
  id?: number;
  Delivery: boolean;
  subtotal: number;
  DeliveryDay?: string;
  ReadyAt?: string;

  items: {
    productId: number;
    quantity: number;
    unitPrice: number;
  }[];

  status: PedidoStatus;
  userId: number;
  user?: {
    id: number;
    name: string;
    email: string;
    phone: string;
    CPF: string;
  };
  paymentId: number;
};

export enum PedidoStatus {
  aguardandoPagamento = "AGUARDANDO_PAGAMENTO",
  end = "END",
}

export default Pedidos;
