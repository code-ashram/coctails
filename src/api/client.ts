import axios from 'axios'

import { Category, Drink } from './models.ts'
import { convertValue } from '../utils.ts'

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

const client = axios.create({
  baseURL: BASE_URL
})

export const getCategories = async (): Promise<Category[]> =>
  client.get<Record<'drinks', Category[]>>('/list.php?c=list')
    .then((response) => response.data.drinks)

export const getDrinks = async (category: string): Promise<Drink[]> =>
  client.get<Record<'drinks', Drink[]>>(`/filter.php?c=${convertValue(category)}`)
    .then((response) => response.data.drinks)

export const getDrink = async (id: string): Promise<Drink> =>
  client.get<Record<'drinks', Drink[]>>(`/lookup.php?i=${id}`)
    .then((response) => response.data.drinks[0])

// export const getComments = async (postId: number): Promise<Comment[]> =>
//   client.get<Comment[]>(`/comments`, { params: { postId } })
//     .then((response) => response.data)
