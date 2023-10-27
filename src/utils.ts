import { Category, Drink, getCategories, getCategory } from './api'

export const convertValue = (value: string) => value.split(' ').join('_')

export const loadCategories = async (): Promise<Record<'categories', Category[]>> => {
  const categories = await getCategories()
  return { categories }
}

export const loadCategory = async (): Promise<Record<'category', Drink[]>> => {
  const category = await getCategory( 'Cocktail')
  return { category }
}
