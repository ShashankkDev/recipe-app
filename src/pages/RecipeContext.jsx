import React, { createContext, useState } from "react";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext, RecipeProvider };
