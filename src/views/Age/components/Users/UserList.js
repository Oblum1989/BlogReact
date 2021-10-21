import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
}
