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
  Checkout,
  ProtectedRoute,
  PaymentAccepted,
  Orders,
    AddComment
} from "./pages";

import "react-image-gallery/styles/css/image-gallery.css";
import Payment from "./pages/Payment/Payment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="signin" element={<Register />} />
          <Route path="offer" element={<SingleOffer />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment-accepted" element={<PaymentAccepted />} />
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
                <Checkout />
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
          <Route
            path="user/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
            <Route
                path="user/orders/add-comment"
                element={
                <ProtectedRoute>
                    <AddComment/>
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
