import { useLoaderData } from 'react-router-dom'
import { Drink } from '../../api'

const Category = () => {
  const { category } = useLoaderData() as Record<'category', Drink[]>

  return (
    <ul>
      {category.map((drink) => (
        <li key={drink.idDrink}>{drink.strDrink}</li>
      ))}
    </ul>
  )
}

export default Category
