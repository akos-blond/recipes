import { Link} from 'react-router-dom';

const Navbar = ({onLogout}) => {
  return (
    <nav className="navbar">
      <h1>Receptjeink Tárháza</h1>
      <div className="links">
        <Link to="/">Főoldal</Link>
        <Link to="/create">Új Recept</Link>
        <button 
          onClick={onLogout}>Kijelentkezés</button>
      </div>
    </nav>
  );
};

export default Navbar;

