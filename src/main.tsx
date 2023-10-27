import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { loadCategories, loadCategory } from './utils.ts'
import Root from './pages/Root.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Category from './components/Category'

import './index.css'
import ErrorCategory from './pages/ErrorCategory.tsx'
import Drink from './components/Drink'
import ErrorDrink from './pages/ErrorDrink.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loadCategories,
    children: [
      {
        path: 'category',
        element: <Category />,
        errorElement: <ErrorCategory />,
        loader: loadCategory
      },
      {
        path: 'category/drinkId',
        element: <Drink />,
        errorElement: <ErrorDrink />,
        loader: loadCategory
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
