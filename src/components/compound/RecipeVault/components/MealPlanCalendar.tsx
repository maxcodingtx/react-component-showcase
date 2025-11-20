import { useState } from "react";
import { type Recipe } from "../types/recipe";

export interface MealPlanEntry {
  id: string;
  date: string;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  recipe: Recipe;
}

interface MealPlanCalendarProps {
  recipes: Recipe[];
  mealPlan: MealPlanEntry[];
  onAddMeal: (date: string, mealType: string, recipe: Recipe) => void;
  onRemoveMeal: (entryId: string) => void;
}

export default function MealPlanCalendar({
  recipes,
  mealPlan,
  onAddMeal,
  onRemoveMeal,
}: MealPlanCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showRecipeSelector, setShowRecipeSelector] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<string>("");

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // push null for empty days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const getMealsForDate = (date: Date) => {
    const dateStr = formatDate(date);
    return mealPlan.filter((entry) => entry.date === dateStr);
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(formatDate(date));
  };

  const handleAddMeal = (mealType: string) => {
    setSelectedMealType(mealType);
    setShowRecipeSelector(true);
  };

  const handleRecipeSelect = (recipe: Recipe) => {
    if (selectedDate && selectedMealType) {
      onAddMeal(selectedDate, selectedMealType, recipe);
      setShowRecipeSelector(false);
      setSelectedMealType("");
    }
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + direction,
        1,
      ),
    );
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="bg-base-200 mb-6 flex items-center justify-between rounded-lg p-4">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigateMonth(-1)}
        >
          ←
        </button>
        <h2 className="text-2xl font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => navigateMonth(1)}
        >
          →
        </button>
      </div>

      <div className="card bg-base-100 mb-6 shadow-xl">
        <div className="card-body p-0">
          <div className="bg-base-200 grid grid-cols-7">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="border-base-300 border-r p-3 text-center font-bold last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {days.map((day, index) => (
              <div
                key={index}
                className={`border-base-300 hover:bg-base-200 min-h-[100px] cursor-pointer border-r border-b p-2 last:border-r-0 ${
                  day ? "bg-base-100" : "bg-base-300 cursor-not-allowed"
                } ${selectedDate === (day ? formatDate(day) : "") ? "bg-primary" : ""}`}
                onClick={() => day && handleDateClick(day)}
              >
                {day && (
                  <>
                    <div className="mb-2 font-bold">{day.getDate()}</div>
                    <div className="flex flex-wrap gap-1">
                      {getMealsForDate(day).map((meal) => (
                        <div
                          key={meal.id}
                          className={`badge badge-sm cursor-pointer ${
                            meal.mealType === "breakfast"
                              ? "badge-accent"
                              : meal.mealType === "lunch"
                                ? "badge-warning"
                                : meal.mealType === "dinner"
                                  ? "badge-info"
                                  : "badge-secondary"
                          }`}
                          title={`${meal.mealType}: ${meal.recipe.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveMeal(meal.id);
                          }}
                        >
                          {meal.mealType[0].toUpperCase()}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedDate && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Meals for {selectedDate}</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {["breakfast", "lunch", "dinner", "snack"].map((mealType) => (
                <div key={mealType} className="card bg-base-200 shadow">
                  <div className="card-body p-4">
                    <h4 className="card-title text-lg">
                      {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                    </h4>
                    <div className="space-y-2">
                      {getMealsForDate(new Date(selectedDate))
                        .filter((meal) => meal.mealType === mealType)
                        .map((meal) => (
                          <div
                            key={meal.id}
                            className="bg-base-100 flex items-center justify-between rounded p-2"
                          >
                            <span className="text-sm">{meal.recipe.title}</span>
                            <button
                              className="btn btn-error btn-xs"
                              onClick={() => onRemoveMeal(meal.id)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                    </div>
                    <button
                      className="btn btn-success btn-sm mt-2 w-full"
                      onClick={() => handleAddMeal(mealType)}
                    >
                      + Add {mealType}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showRecipeSelector && (
        <div className="modal modal-open">
          <div className="modal-box max-w-lg">
            <h3 className="mb-4 text-lg font-bold">Select a Recipe</h3>
            <div className="max-h-96 space-y-2 overflow-y-auto">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="card bg-base-200 hover:bg-base-300 cursor-pointer shadow transition-colors"
                  onClick={() => handleRecipeSelect(recipe)}
                >
                  <div className="card-body p-3">
                    <span className="font-medium">{recipe.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setShowRecipeSelector(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
