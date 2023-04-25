import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { SearchGifs } from './pages/SearchGifs';
import { FavoriteGifs } from './pages/FavoriteGifs';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<SearchGifs />} />
            <Route path="/favorites" element={<FavoriteGifs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
