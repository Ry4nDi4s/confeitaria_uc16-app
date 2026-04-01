import styles from "./styles.module.css";
import Produto from "@/Model/TiposProdutos";
import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

type Props = {
  produto: Produto;
};

function formatarDataISO(isoString: string): string {
  if (!isoString) return "";
  const data = new Date(isoString);
  if (isNaN(data.getTime())) return isoString;
  return new Intl.DateTimeFormat("pt-BR").format(data);
}

export default function ProductCardAdmin({ produto }: Props) {
  const [show, setShow] = useState(false);
  const [produtoEdit, setProdutoEdit] = useState<Produto>(produto);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setProdutoEdit(produto);
  }, [produto]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    setProdutoEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <li className={styles.produto}>
      <span className={styles.nome}>Nome: {produto.name}</span>

      <img className={styles.foto} src={produto.foto} alt={produto.name} />

      <span className={styles.preco}>R$: {produto.preco}</span>
      <span>Descrição: {produto.description}</span>
      <span>Quantidade: {produto.quantify}</span>
      <span>Stock: {produto.stock}</span>

      <span>Validade: {formatarDataISO(produto.maturity.toString())}</span>

      <span>Tipo: {produto.tipo}</span>

      <button className={styles.editar} onClick={handleShow}>
        Editar
      </button>

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>
            Editar Produto
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className={styles.input}
                name="name"
                value={produtoEdit?.name || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                className={styles.input}
                name="preco"
                value={produtoEdit?.preco || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                className={styles.input}
                name="description"
                value={produtoEdit?.description || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                className={styles.input}
                name="quantify"
                value={produtoEdit?.quantify || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Estoque</Form.Label>
              <Form.Control
                className={styles.input}
                name="stock"
                value={produtoEdit?.stock || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Button className={styles.btnCancelar} onClick={handleClose}>
            Cancelar
          </Button>

          <Button
            className={styles.btnSalvar}
            onClick={() => {
              console.log(produtoEdit);
              handleClose();
            }}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}
