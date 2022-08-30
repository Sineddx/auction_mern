import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Error,
  Home,
  SharedLayout,
  SearchResult,
  Register,
  AddOffer,
  SingleOffer,
  Messages,
  Checkout
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
            path="user/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout/>
            </ProtectedRoute>
          }
          />
          <Route
            path="add-auction"
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
