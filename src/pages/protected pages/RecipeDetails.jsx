import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const RecipeDetails = () => {
    const {id} = useParams();
    const { data: recipe, error, isPending} = useFetch('http://localhost:3001/receptek/' + id);
    let navigate = useNavigate();


    const handleClick = () => {
        fetch('http://localhost:3001/receptek/' + recipe.id, {
            method: 'DELETE'
        }).then(() => {
           navigate('/')
        })
    }

    return (
        <div className="recipe-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { recipe && (
            <article>
                <h2>{recipe.title}</h2>
                <p>Alkotó: {recipe.author}</p>
                <h3>Hozzávalók:</h3>
                <ul className="ingredients">{recipe.ingredients.map((part) => <li key={part}>{part}</li>)}</ul>
                <h3>Elkészítés:</h3>
                <div>{recipe.body && recipe.body.split('\n').map((part) => <p key={part}>{part}</p>)}</div>
                <button onClick={handleClick}>Törlés</button>
            </article>)}
        </div>
    );
}

export default RecipeDetails;