import SearchBar from '@/components/SearchBar/SearchBar';
import { GifsList } from '@/components/GifsList';
import useGifs from '@/hooks/useGifs';
import { Header } from '@/components/Header';
import useFavoriteGifs from '@/hooks/useFavoriteGifs';

function SearchGifs() {
  const [queryResult, setQuery, currentPage, handleNextPage, handlePrevPage, setCurrentPage] = useGifs();
  const { favoriteGifs, addToFavorites, removeFromFavorites } = useFavoriteGifs();

  return (
    <>
      <Header />
      <SearchBar setQuery={setQuery} resetPage={() => setCurrentPage(0)} />
      {queryResult.isLoading && <p>Loading...</p>}
      {queryResult.isError && <p>An error occurred</p>}
      {queryResult.data && (
        <GifsList
          gifs={queryResult.data}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          favoriteGifs={favoriteGifs}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavoriteList={false}
        />
      )}
    </>
  );
}

export default SearchGifs;
