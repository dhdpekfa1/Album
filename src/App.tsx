import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import BookmarkPage from "./pages/Bookmark";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
