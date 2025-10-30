import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './styles.module.css';
import OffCanvasLink from './OffCanvasLink';

export default function OffCanvasADM() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
       <Button variant='none' onClick={handleShow}>
        <img src="/Imagens/Setas/SetaDireita_Sistema.png"/>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.menu}>
            <OffCanvasLink text="Pedidos" href="/PedidosPage" />
            <OffCanvasLink text="Produtos" href="/ProductPage" />
            <OffCanvasLink text="Ingredientes" href="/IngredientePage" />
            <OffCanvasLink text="Receitas" href="/ReceitaPage" />
            <OffCanvasLink text="Usuários" href="/UserPage" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}