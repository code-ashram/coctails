import Header from '../../components/Header'

import styles from '../../Root.module.css'

const ErrorPage = () => (
  <section className={styles.errorPage}>
    <Header/>

    <h2 className={styles.errorTitle}>No such drink or ingredient =(</h2>
  </section>
)

export default ErrorPage
