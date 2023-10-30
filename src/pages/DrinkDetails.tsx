// import styles from '../Root.module.css'
import { Drink } from '../api'

import { useLoaderData } from 'react-router-dom'

const DrinkDetails = () => {
  const { drink } = useLoaderData() as Record<'drink', Drink>

  return (
    <>
      <h2>{drink.strDrink}</h2>
      {/* <img src="#" alt="Drink img" /> */}

      {/* <h3>Ingredients</h3> */}

      {/* <ul className={styles.ingredients}> */}
      {/*   <li>Ingredient 1</li> */}
      {/*   <li>Ingredient 2</li> */}
      {/*   <li>Ingredient 3</li> */}
      {/* </ul> */}

      {/* <p>Instructions</p> */}

      {/* <p>Glass</p> */}
    </>
  )
}

export default DrinkDetails
