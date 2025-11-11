type Pedidos = {
    id?: number,
    which_product: string,
    who_oder: string,
    value: number,
    quantify: number,
    delivery_day: number,
    userId?: number,
    paymentId?: number
}

export default Pedidos;