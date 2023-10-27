import { Outlet, useLoaderData } from 'react-router-dom'
import Header from '../components/Header'

import styles from '../Root.module.css'
import { Category } from '../api'

const Root = () => {
  const { categories } = useLoaderData() as Record<'categories', Category[]>

  return (
    <>
      <Header />

      <main className={styles.mainPage}>

        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.strCategory}>
              {category.strCategory}
            </li>
          ))}
        </ul>

        <section className={styles.details}>
          <Outlet/>
        </section>
      </main>
    </>
  )
}

export default Root
