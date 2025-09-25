type Produto = {
    id?: number;
    fotoUrl: string | Blob | undefined;
    nome: string;
    preco: number;
}

export default Produto;