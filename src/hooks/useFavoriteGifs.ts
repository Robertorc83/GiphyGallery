import { useState, useEffect } from 'react';

const FAVORITE_GIFS_KEY = 'favoriteGifs';

const useFavoriteGifs = () => {
  const [favoriteGifs, setFavoriteGifs] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITE_GIFS_KEY);
    if (storedFavorites) {
      setFavoriteGifs(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITE_GIFS_KEY, JSON.stringify(favoriteGifs));
  }, [favoriteGifs]);

  const addToFavorites = (id: string, imageUrl: string) => {
    setFavoriteGifs((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites, [id]: imageUrl };
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteGifs((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      delete updatedFavorites[id];
      return updatedFavorites;
    });
  };

  return { favoriteGifs, addToFavorites, removeFromFavorites };
};

export default useFavoriteGifs;
