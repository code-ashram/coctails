import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { loadCategories, loadDrink, loadDrinks } from './utils.ts'
import Root from './pages/Root.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import ErrorCategory from './pages/ErrorCategory.tsx'
import Category from './pages/Category.tsx'
import ErrorDrink from './pages/ErrorDrink.tsx'
import DrinkDetails from './pages/DrinkDetails.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loadCategories,
    children: [
      {
        path: '/:drinks',
        element: <Category />,
        errorElement: <ErrorCategory />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        loader: loadDrinks
      },
      {
        path: '/:drinks/:drinkId',
        element: <DrinkDetails />,
        errorElement: <ErrorDrink />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        loader: loadDrink
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
