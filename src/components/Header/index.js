import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <ul className="header-container">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
export default Header
