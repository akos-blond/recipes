import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sajnálom,</h2>
            <p>de az általad megadott elérési útvonal nem található.</p>
            <Link to="/">Vissza a kezdőlapra...</Link>
        </div>
    );
}
<div className="not-found">
    <h2>Sorry</h2>
    <p>That page cannot</p>
</div>
export default NotFound;