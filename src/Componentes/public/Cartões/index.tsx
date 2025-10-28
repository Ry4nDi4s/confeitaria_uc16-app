import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.css"

type Props = {
    nome: string;
    foto: string;
    link: string;
}

function Cartões(props: Props) {
    return (
        <>
        <div className={styles.cards}>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={props.foto} />
                <Card.Body>
                    <Card.Title>{props.nome}</Card.Title>
                    <Button variant="primary" href={props.link}>Saiba Mais</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}

export default Cartões;