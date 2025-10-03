type Produto = {
    id?: number;
    fotoUrl: string | Blob | undefined;
    nome: string;
    preco: number;
    description: string;
    quantify: number;
    stock: number;
    maturity: Date;            
}
export default Produto;