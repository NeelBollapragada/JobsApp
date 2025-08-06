import { useNavigate } from "react-router-dom";

const BackLink = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="text-white bg-indigo-700 py-2 px-3 rounded-md mt-8 hover:bg-indigo-400 cursor-pointer"
    >
      Go Back
    </button>
  );
};

export default BackLink;
