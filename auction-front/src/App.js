import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Error, Home, SharedLayout, SearchResult, Register } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="signin" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
