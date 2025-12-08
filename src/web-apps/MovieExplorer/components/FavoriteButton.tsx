interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggleFavorite: () => void;
  className?: string;
}

export const FavoriteButton = ({
  isFavorite,
  onToggleFavorite,
}: FavoriteButtonProps) => {
  return (
    <button
      className={"space-x-1 " + (isFavorite ? "text-red-500" : "text-gray-500")}
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <span className="favorite-icon">{isFavorite ? "❤️" : "🤍"}</span>
      <span className="favorite-text">
        {isFavorite ? "Favorited" : "Add to Favorites"}
      </span>
    </button>
  );
};
