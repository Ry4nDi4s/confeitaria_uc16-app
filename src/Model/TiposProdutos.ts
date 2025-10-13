import { ReactNode } from "react";

type Produto = {
    nome: ReactNode;
    fotoUrl: string | Blob | undefined;
    id?: number;
    name: string;
    foto: string | Blob | undefined;
    preco: number;
    description: string;
    quantify: number;
    stock: number;
    maturity: Date
}

export default Produto;