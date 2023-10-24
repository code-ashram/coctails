import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <NavLink to={`/`}>Drinks</NavLink>
    </nav>
  </header>
)

export default Header
