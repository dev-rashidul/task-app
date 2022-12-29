import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center mt-20 lg:mt-40">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-10">
        Welcome to my{" "}
        <span className="text-purple-600 font-bold">Task App</span>
      </h2>
      <Link
        className="bg-purple-600 text-white py-3 px-8 rounded-md"
        to="/add-task"
      >
        Add Task
      </Link>
    </section>
  );
};

export default Home;
