import Link from "next/link";
import styles from './styles.module.css';

type Props = {
    text: string;
    href: string;
}

export default function OffCanvasLink(props: Props) {
  return (
    <Link href={props.href} className={styles.root}>{props.text}</Link>
  );
}