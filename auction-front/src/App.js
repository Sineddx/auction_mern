import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Error,
  Home,
  SharedLayout,
  SearchResult,
  Register,
  AddOffer,
  SingleOffer,
} from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import "react-image-gallery/styles/css/image-gallery.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="signin" element={<Register />} />
          <Route path="offer" element={<SingleOffer />} />
          <Route
            path="add-product"
            element={
              <ProtectedRoute>
                <AddOffer />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
