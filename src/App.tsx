import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "jotai";
import HomePage from "./pages/Home";
import BookmarkPage from "./pages/Bookmark";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/search/:id" element={<HomePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
