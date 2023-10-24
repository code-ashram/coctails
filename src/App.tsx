import styles from './App.module.css'

const App = () => {

  return (
    <>
      <header>
        <nav>Drinks</nav>
      </header>

      <main className={styles.mainPage}>
        <ul className={styles.list}>
          <li>Coctails</li>
          <li>Coffee</li>
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

export default App
