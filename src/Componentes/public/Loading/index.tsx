import styles from "./styles.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <div className={styles.Loading}>
        <Spinner animation="border" role="status" />
      </div>
    </>
  );
}
