// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: 'black', padding: '1rem', position: 'sticky', top: 0, zIndex: 1000 }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Movie App</Link> | 
    <Link to="/watchlist" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>Watchlist</Link>
  </nav>
);

export default Navbar;
