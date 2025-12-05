import styles from "./styles.module.css";
import User from "@/Model/TiposUsers"

type Props = {
    user: User[]
}

export default function UsersCard({ user }: Props) {
    return (
        <li className={styles.users}>
            <span className={styles.name}>Nome: {user.name}</span>
        </li>
    );
}
