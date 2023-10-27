import styles from '../../Root.module.css'

const Drink = () => {
  return (
    <>
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
    </>
  )
}

export default Drink
