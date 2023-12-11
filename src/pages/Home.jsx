import RecipeList from "./RecipeList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data: recipes, isPending, error} = useFetch('http://localhost:3001/receptek')


  return (
    <div className="home">
        {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {recipes && <RecipeList recipes={recipes} title="Összes recept:" />}
    </div>
  );
};

export default Home;

