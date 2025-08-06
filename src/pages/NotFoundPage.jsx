import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import BackLink from "../components/BackLink";

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col items-center">
      <FaExclamationTriangle className="text-yellow-400 text-8xl mb-4 mt-4" />
      <h1 className="text-6xl font-bold text-black">404 Not Found</h1>
      <p>This page does not exist.</p>
      <BackLink />
    </section>
  );
};

export default NotFoundPage;
