import { Link, useLoaderData } from 'react-router-dom'
import { encodeValue } from '../utils.ts'
import { Drink } from '../api'

import styles from '../Root.module.css'

const SearchResult = () => {
  const { drinks } = useLoaderData() as Record<'drinks', Drink[]>

  return (
    <>
      <h2>Search result:</h2>
      <ul className={styles.searchWindow}>
        {drinks.map((drink) => (
          <li className={styles.searchItem} key={drink.idDrink}>
            <Link to={`/${encodeValue(drink.strCategory)}/${drink.idDrink}`}>
              <img className={styles.drinkSearchImg} src={drink.strDrinkThumb} alt={drink.strDrinkAlternate} />

              <p>{drink.strDrink}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SearchResult
