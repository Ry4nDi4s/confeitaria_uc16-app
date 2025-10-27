import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Buscar() {
  return (
      <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Pesquisar"
              className=" me-2"
            />
          </Col>
          <Col xs="auto">
            <Button variant='info' type="submit">Buscar</Button>
          </Col>
        </Row>
      </Form>
  );
}

export default Buscar;