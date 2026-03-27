import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";

function Buscar() {
  return (
    <Form>
      <Row>
      <div className={styles.geral}>
        <div className={styles.busca}>
        <Col xxl="auto">
          <Form.Control
            type="text"
            placeholder="Pesquisar"
          />
        </Col>
        </div>
        <div className={styles.botao}>
        <Col xxl="auto">
          <Button variant="info" type="submit">
            Buscar
          </Button>
        </Col>
        </div>
      </div>
      </Row>
    </Form>
  );
}

export default Buscar;
