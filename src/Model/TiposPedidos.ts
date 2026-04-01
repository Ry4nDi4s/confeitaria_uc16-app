type Pedidos = {
  id: number;
  Delivery: boolean;
  subtotal: number;
  DeliveryDay?: string;
  ReadyAt?: string;

  items: {
    productId: number;
    quantity: number;
    unitPrice: number;
  }[];

  status: string;
  userId: number;
  paymentId: number;
};

export default Pedidos;