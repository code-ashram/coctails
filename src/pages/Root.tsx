import { useLoaderData } from 'react-router-dom'

import Header from '../components/Header'
import { Category } from '../api'

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
              {category.strCategory}
            </li>
          ))}
        </ul>

        <section className={styles.details}>
          <h2>Drink title</h2>
          <img src="#" alt="Drink img" />

          <h3>Ingredients</h3>

          <ul className={styles.ingredients}>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>

          <p>Instructions</p>

          <p>Glass</p>
        </section>
      </main>
    </>
  )
}

export default Root
