import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Receptjeink Tárháza</h1>
      <div className="links">
        <Link to="/">Főoldal</Link>
        <Link to="/create">Új Recept</Link>
        <Link 
        to="/login"
         style={{
            color: "white",
            backgroundColor: "#f15e35",
            borderRadius: "8px",
          }}
          >Bejelentkezés</Link>
        <Link to="/register">Regisztráció</Link>
      </div>
    </nav>
  );
};

export default Navbar;

