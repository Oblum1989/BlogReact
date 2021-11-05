import styles from './Loading.module.css'
import LoadingSpinner from './LoadingSpinner'

export default function Loading({title}) {
  return(
    <div className={styles.loading}>
      <LoadingSpinner/>
      <p>{title}</p>
    </div>
  )
}