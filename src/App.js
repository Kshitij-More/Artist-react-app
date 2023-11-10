import HomePages from "./HomePages";
import Users from "./pages/Users";
import Artist from "./pages/Artist"
import Album from "./pages/Album"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UsersRating from "./pages/UsersRating";
import AlbumsRating from "./pages/AlbumsRating";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePages />}>
            <Route path="user"  element={<Users />} />
            <Route index  element={<Users />} />
            <Route path="artist" element={<Artist />} />
            <Route path="album" element={<Album />} />
            <Route path="usersRating" element={<UsersRating/>} />
            <Route path="albumsRating" element={<AlbumsRating />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
