import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Header from '../components/Header'
import { Category } from '../api'
import { encodeValue } from '../utils.ts'

import styles from '../Root.module.css'

const Root = () => {
  const { categories } = useLoaderData() as Record<'categories', Category[]>

  return (
    <>
      <Header />

      <main className={styles.mainPage}>

        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category.strCategory}>
              <Link to={`/${encodeValue(category.strCategory)}`}>{category.strCategory}</Link>
            </li>
          ))}
        </ul>

        <section className={styles.details}>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default Root
