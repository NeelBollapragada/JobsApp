import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        className="block text-white bg-black py-4 px-6 rounded-xl text-center hover:bg-gray-700"
        to="/jobs"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
