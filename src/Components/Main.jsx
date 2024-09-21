
import styles from "./Main.module.css"
function Main() {
  const url= import.meta.env.VITE_MY_VARIABLE
  console.log(url)
  return (
    <div className={styles.MainContainer}>
      <h1>Main section</h1>
    </div>
  )
}

export default Main