import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RecipeContext } from "../pages/RecipeContext";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const DetailsPage = () => {
  const { selectedRecipe } = useContext(RecipeContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedRecipe) {
      navigate("/", { replace: true });
    }
  }, [selectedRecipe, navigate]);

  if (!selectedRecipe) return null;

  const backbutton = () => {
    navigate("/");
  };

  return (
    <div className="bg-white relative p-6  md:p-10 lg:p-16 max-w-screen-lg mx-auto rounded-lg mb-20">
      <button onClick={backbutton} className="absolute md:left-0 left-5 mb-8">
        <IoMdArrowBack size={20} />
      </button>
      <h1 className="font-bold text-3xl md:text-5xl mt-4 text-gray-800">
        {selectedRecipe.label}
      </h1>
      <img
        src={selectedRecipe.image}
        alt={selectedRecipe.label}
        className="w-full h-64 md:h-96 object-cover mt-4 rounded-md shadow-sm"
      />
      <div className="mt-4">
        <h3 className="font-bold text-2xl md:text-3xl mt-6 text-gray-800">
          Diet Labels:
        </h3>
        <p className="text-lg text-gray-600">{selectedRecipe.dietLabels[0]}</p>
        <p className="text-lg text-gray-600">{selectedRecipe.dietLabels[1]}</p>
        <h3 className="font-bold text-2xl md:text-3xl mt-6 text-gray-800">
          Health Labels:
        </h3>
        <p className="text-lg text-gray-600">
          {selectedRecipe.healthLabels.join(", ")}
        </p>
      </div>
      <h1 className="font-bold text-2xl md:text-3xl mt-6 text-gray-800">
        Ingredients:
      </h1>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {selectedRecipe.ingredientLines.map((ingredient, idx) => (
          <li key={idx} className="text-lg md:text-xl">
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center mt-10 h-40 w-full">
        <Link
          to={`https://www.youtube.com/results?search_query=${selectedRecipe.label} recipe`}
          target="_blank"
        >
          <h2 className="font-bold text-2xl md:text-2xl mt-6 text-gray-900 justify-center items-center">
            Click here to Go and Watch Tutorial on Youtube!
            <FaYoutube size={100} color="red" />
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
