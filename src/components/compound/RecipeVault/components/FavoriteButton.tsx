type FavoriteButtonProps = {
  isFavorite: boolean;
  onToggle: () => void;
};

export const FavoriteButton = ({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) => (
  <button className="btn btn-primary" onClick={onToggle}>
    {isFavorite ? "Unfavorite" : "Add to Favorites"}
  </button>
);
