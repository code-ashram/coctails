import { Category, getCategories } from './api'

export const loadCategories = async ():Promise<Record<'categories', Category[]>> => {
  const categories = await getCategories()
  return { categories }
}
