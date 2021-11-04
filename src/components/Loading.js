import styles from './Loading.module.css'

export default function Loading({title}) {
  return(
    <>
      <div className={styles["lds-hourglass"]}></div>
      <p>{title}</p>
    </>
  )
}