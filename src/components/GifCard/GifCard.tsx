interface GifCardProps {
  id: string;
  image: string;
  title: string;
  addToFavorites?: (id: string, imageUrl: string) => void;
  removeFromFavorites?: (id: string) => void;
  isFavorite: boolean;
}

function GifCard({ id, image, title, isFavorite, removeFromFavorites, addToFavorites }: GifCardProps) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites?.(id);
    } else {
      addToFavorites?.(id, image);
    }
  };
  return (
    <div key={id} className="rounded-lg overflow-hidden grid justify-items-center">
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={image} alt={title} />
      </a>
      <p className="text-center">{title}</p>
      <button onClick={handleFavoriteClick}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
    </div>
  );
}

export default GifCard;
