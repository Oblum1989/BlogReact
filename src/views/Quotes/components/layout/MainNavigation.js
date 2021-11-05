import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css'

export default function MainNavigation() {
  return(
    <header className={styles.header}>
      <div className={styles.log}>Great quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={styles.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={styles.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}