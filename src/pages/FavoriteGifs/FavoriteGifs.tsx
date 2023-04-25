import { GifCard } from '@/components/GifCard';
import useFavoriteGifs from '@/hooks/useFavoriteGifs';

const Favorites: React.FC = () => {
  const { favoriteGifs, removeFromFavorites } = useFavoriteGifs();

  return (
    <div>
      <h2 className="bg-red-500 text-white text-center p-10 ">Favorite Gifs</h2>
      <div className="m-5">
        {Object.entries(favoriteGifs).map(([id, imageUrl]) => (
          <GifCard
            key={id}
            id={id}
            image={imageUrl}
            title="Favorite Gif"
            isFavorite
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
