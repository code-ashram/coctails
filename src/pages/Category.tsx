import { Link, useLoaderData, useParams } from 'react-router-dom'
import { Drink } from '../api'

const Category = () => {
  const { drinks } = useLoaderData() as Record<'drinks', Drink[]>
  const params = useParams()

  return (
    <ul>
      {drinks?.map(({ idDrink, strDrink }) => (
        <li key={idDrink}>
          <Link to={`/${params.drinks}/drinkId`}>{strDrink}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Category
