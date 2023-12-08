import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RecipeList = ({recipes, title}) => {
    return (
        <div className="recipe-list">
            <h2>{title}</h2>
                       {recipes.map((recipe)=> (
            <div className="recipe-preview" key={recipe.id}>
                <Link to={`/receptek/${recipe.id}`}>
                <h2>{recipe.title}</h2>
                <p>Alkotó: {recipe.author}</p>
                </Link>
            </div>
           ))}
        </div>
    );
}
 
export default RecipeList;