import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailsPage from "./pages/DetailsPage";
import { RecipeProvider } from "./pages/RecipeContext";

function App() {
  return (
    <div className="flex">
      <RecipeProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </RecipeProvider>
    </div>
  );
}

export default App;
