import React from 'react';

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  resetPage: () => void;
}

function SearchBar({ setQuery, resetPage }: SearchBarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const searchInput = target.elements.namedItem('search') as HTMLInputElement;
    if (searchInput) {
      const searchValue = searchInput.value;
      setQuery(searchValue);
      resetPage();
    }
  };

  return (
    <div className="m-8 pt-0 px-10">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch w-full">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="flex-grow px-3 py-3 placeholder-slate-300 text-red-600 relative bg-white rounded-l text-sm border-0 shadow outline-none focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 w-full md:w-auto"
        />
        <button
          type="submit"
          className="mt-2 md:mt-0 md:ml-2 w-full md:w-auto px-4 py-3 text-white bg-red-500 rounded-r-lg shadow-md hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
