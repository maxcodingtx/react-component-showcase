import { type Recipe } from "../types/recipe";
import { Link } from "react-router";

// type since it is only 1 prop
type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-lg">{recipe.title}</h2>
          <p className="text-base-content/70 text-sm">{recipe.description}</p>
          <Link
            className="font-bold hover:underline"
            to={`/recipe/${recipe.id}`}
          >
            View Details
          </Link>
        </div>
        <div className="stat">
          <div className="stat-title">Servings</div>
          <div className="stat-value text-sm">{recipe.servings}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Difficulty</div>
          <div className="stat-value text-sm">{recipe.difficulty}</div>
        </div>
      </div>
    </div>
  );
};
