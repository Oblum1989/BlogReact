import styles from "./Navigation.module.css";

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
