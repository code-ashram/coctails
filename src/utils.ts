import { Category, Drink, getCategories, getDrink, getDrinks } from './api'

export const convertValue = (value: string) => value.split(' ').join('_')

export const encodeValue = (value: string) => value
  .replaceAll(' ', '_')
  .replace('/', '-')

export const decodeValue = (value: string) => value.replace('-', '/')

export const loadCategories = async (): Promise<Record<'categories', Category[]>> => {
  const categories = await getCategories()
  return { categories }
}

type Arg = {
  params: {
    drinks: string
    drinkId: string
  }
}

export const loadDrinks = async ({ params }: Arg): Promise<Record<'drinks', Drink[]>> => {
  const drinks = await getDrinks(decodeValue(params.drinks))
  return { drinks }
}

export const loadDrink = async ({ params }: Arg): Promise<Record<'drink', Drink>> => {
  const drink = await getDrink(params.drinkId)
  return { drink }
}

export const filterIngredients = (obj: Drink) => {
  const filteredArr = Object.entries(obj).filter((arr) => arr[0].includes('strIngredient') && arr[1] !== null)
  return filteredArr.map((arr) => arr[1])
}
