import User from "@/Model/TiposUsers"
import UsersCard from "../UsersCard"
import styles from "./styles.module.css"


type Props = {
    users: User[]
}

export default function UserList({ users }: Props) {
    return (
        <ul className={styles.users}>
            {users.map(function (user: User) {
                return (
                        <UsersCard
                            key={user.id}
                            user={user}
                        />
                )
            })}
        </ul>
    )
}