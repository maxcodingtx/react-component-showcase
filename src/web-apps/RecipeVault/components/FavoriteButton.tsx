interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <button className="btn btn-primary" onClick={onToggle}>
      {isFavorite ? "Unfavorite" : "Add to Favorites"}
    </button>
  );
}
