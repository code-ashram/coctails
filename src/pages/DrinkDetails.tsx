import { useLoaderData } from 'react-router-dom'

import { Drink } from '../api'
import { filterIngredients } from '../utils.ts'

import styles from '../Root.module.css'

const DrinkDetails = () => {
  const { drink } = useLoaderData() as Record<'drink', Drink>

  return (
    <>
      <h2>{drink.strDrink}</h2>
      <img className={styles.drinkImg} src={drink.strDrinkThumb} alt={drink.strDrinkAlternate} />

      <h3>Ingredients:</h3>

      <ul className={styles.ingredients}>
        {filterIngredients(drink).map((ingredient) => (
          <li key={`ingredient ${Math.random()}`}>{ingredient}</li>
        ))}
      </ul>

      <p><b>Instruction: </b>{drink.strInstructions}</p>

      <p><b>Glass: </b>{drink.strGlass}</p>
    </>
  )
}

export default DrinkDetails
