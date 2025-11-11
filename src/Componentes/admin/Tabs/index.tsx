import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Loading from "@/Componentes/public/Loading";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import api from "@/services/api";
import Salvar from "@/Componentes/admin/Adicionar";
import styles from "./styles.module.css"
import ProductList from "@/Componentes/admin/ProductList";
import PedidoList from '../PedidoList';

export default function TabsSistema() {
    return (
        <Tabs
            defaultActiveKey="profile"
            className={styles.tabs}
            justify
        >
            <Tab eventKey="Pedidos" title="Pedidos" >
                <Pedidos/>
            </Tab>
            <Tab eventKey="Produtos" title="Produtos" >
                <Produto />
            </Tab>
            <Tab eventKey="Ingredientes" title="Ingredientes" >
                Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="Receitas" title="Receitas" >
                Tab content for Contact
            </Tab>
            <Tab eventKey="Usuários" title="Usuários" >
                Tab content for Contact
            </Tab>
        </Tabs >
    );
}

// TAB-PRODUTOS

export function Produto() {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    function loadProdutos() {
        setIsLoading(true);
        api.get("/products")
            .then(function (response: AxiosResponse) {
                setProdutos(response.data)
            })
            .catch(function () {
                alert("Fail")
            })
            .finally(function () {
                setIsLoading(false);
            })
    };

    useEffect(loadProdutos, []);
    return (
        <>
            {(isLoading) && (<Loading />)}
            <ProductList produtos={produtos} />
            <Salvar onSuccess={loadProdutos} />
        </>
    );
}

// TAB-PEDIDOS

export function Pedidos() {
    const [pedidos, setpedido] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    function loadPedidos() {
        setIsLoading(true);
        api.get("/orders")
            .then(function (response: AxiosResponse) {
                setpedido(response.data)
            })
            .catch(function () {
                alert("Fail")
            })
            .finally(function () {
                setIsLoading(false);
            })
    };

    useEffect(loadPedidos, []);
    return (
        <>
            {(isLoading) && (<Loading />)}
            <PedidoList pedido={pedidos}/>
        </>
    );
}