import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SmallSpinner from "../../Spinner/SmallSpinner";

const Register = () => {
  // Get Register function from Context
  const { createUser, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);

  // Navigate and Location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const registerHandler = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result: any) => {
      const user = result.user;
      handleUserUpdateProfile(name);
      console.log(user);
      form.reset();
      navigate(from, { replace: true });
      setLoading(false);
    });
  };

  // Update User Profile
  const handleUserUpdateProfile = (name: string) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile);
  };

  return (
    <section className="mx-5 md:mx-0">
      <div className="login-wrapper w-full md:w-1/4 mx-auto bg-purple-50 shadow-md rounded-md mt-32 py-10 px-8">
        <h2 className="text-2xl md:text-3xl text-purple-600 font-bold text-center">
          Register Here
        </h2>
        <form onSubmit={registerHandler} className="login-form mt-10">
          <div className="input-group mb-5">
            <label>Name</label>
            <input
              className="w-full bg-white border-none py-2.5 px-5 focus:outline-0 rounded-md mt-2"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="input-group mb-5">
            <label>Email</label>
            <input
              className="w-full bg-white border-none py-2.5 px-5 focus:outline-0 rounded-md mt-2"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-group mb-5">
            <label>Password</label>
            <input
              className="w-full bg-white border-none py-2.5 px-5 focus:outline-0 rounded-md mt-2"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-group">
            <button
              className="block w-full bg-purple-600 text-white font-medium py-2 rounded-md"
              type="submit"
            >
              {loading ? <SmallSpinner></SmallSpinner> : "Register"}
            </button>
          </div>
          <p className="mt-5">
            Already have an Account{" "}
            <Link className="text-purple-600 font-medium" to="/login">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
