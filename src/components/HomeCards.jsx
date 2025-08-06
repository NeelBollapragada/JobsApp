import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="mb-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 rounded-lg">
          <Card>
            <h2 className="text-black font-bold text-2xl">For Developers</h2>
            <p className="mt-4 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              className="inline-block text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-700"
              to="/jobs"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-black font-bold text-2xl">For Employers</h2>
            <p className="mt-4 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              className="inline-block text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400"
              to="/add-job"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
