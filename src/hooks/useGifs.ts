import { useState } from 'react';
import { useQuery } from 'react-query';

import apiClient from '../services/apiClient';
import { GiphyApiResponse } from '../types';

const resultsPerPage = 12;

const fetchGifs = async (query: string, page: number): Promise<GiphyApiResponse> => {
  const offset = page * resultsPerPage;
  const response = await apiClient.get('/search', { params: { q: query, limit: resultsPerPage, offset } });
  return response.data;
};

const useGifs = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const queryResult = useQuery<GiphyApiResponse, unknown>(
    ['gifs', query, currentPage],
    () => fetchGifs(query, currentPage),
    {
      enabled: !!query,
    },
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  return [queryResult, setQuery, currentPage, handleNextPage, handlePrevPage, setCurrentPage] as const;
};

export default useGifs;
