import { type Recipe } from "../types/recipe";

// type since it is only 1 prop
type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="card">
      <h2 className="card-title">{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Cook Time: {recipe.cookTime}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>Category: {recipe.category}</p>
    </div>
  );
};
