import { type Recipe } from "../types/recipe";

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
          <div className="my-4 grid grid-cols-2 gap-2"></div>
          <div className="stat"></div>
          <div className="stat-title">Cook Time</div>
          <div className="stat-value text-sm">{recipe.cookTime}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Servings</div>
          <div className="stat-value text-sm">{recipe.servings}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Difficulty</div>
          <div className="stat-value text-sm">{recipe.difficulty}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Category</div>
          <div className="stat-value text-sm">{recipe.category}</div>
        </div>
      </div>

      <div className="divider">Ingredients</div>
      <ul className="list-inside list-disc space-y-1 text-sm">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-base-content/80">
            {ingredient}
          </li>
        ))}
      </ul>

      <div className="divider">Instructions</div>
      <ol className="list-inside list-decimal space-y-2 text-sm">
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="text-base-content/80">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
};
