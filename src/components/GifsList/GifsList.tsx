import { GifCard } from '@/components/GifCard';
import { GiphyApiResponse, PartialGiphyApiResponse } from '@/types/index';

interface GifsListProps {
  gifs: GiphyApiResponse | PartialGiphyApiResponse | undefined;
  handlePrevPage?: () => void;
  currentPage?: number;
  handleNextPage?: () => void;
  favoriteGifs: { [key: string]: string };
  addToFavorites?: (id: string, imageUrl: string) => void;
  removeFromFavorites?: (id: string) => void;
  isFavoriteList?: boolean;
}

function GifsList({
  gifs,
  handlePrevPage,
  currentPage,
  handleNextPage,
  addToFavorites,
  favoriteGifs,
  removeFromFavorites,
}: GifsListProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 justify-items-center">
        {gifs?.data &&
          gifs.data.map((gif) => (
            <GifCard
              key={gif.id}
              id={gif.id}
              image={gif.images.fixed_height.url}
              title={gif.title}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={favoriteGifs && gif.id in favoriteGifs}
            />
          ))}
      </div>
      <div className="flex justify-center m-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="px-10 py-1 mx-2 text-white bg-red-400 rounded-lg"
        >
          Previous
        </button>
        <button onClick={handleNextPage} className="px-10 py-1 mx-2 text-white bg-red-400 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
}

export default GifsList;
