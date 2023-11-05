import { NavLink, useNavigate } from 'react-router-dom'

import styles from '../../Root.module.css'
import { FormEvent } from 'react'

const Header = () => {
  const navigate = useNavigate()

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault()
  //   navigate(`/drinks/search?query=${event.target.value}`)
  // }

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [search ] = event.currentTarget.elements

    return navigate(`/drinks/search?query=${(search as HTMLInputElement).value}`)
  }

  return (
    <header>
      <nav>
        <NavLink to={`/`}>Drinks</NavLink>
      </nav>

      <form className={styles.search} onSubmit={formSubmit} id="search-form" role="search">
        <label htmlFor="search">Search cocktail</label>
        <input className={styles.searchInput} id="search" type="text" />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}

export default Header
