import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  // Get Register function from Context
  const { userLogin } = useContext(AuthContext);

  const loginHandler = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password).then((result: any) => {
      const user = result.user;
      console.log(user);
      form.reset();
    });
  };
  return (
    <section className="mx-5 md:mx-0">
      <div className="login-wrapper w-full md:w-1/4 mx-auto bg-purple-50 shadow-md rounded-md mt-32 py-10 px-8">
        <h2 className="text-2xl md:text-3xl text-purple-600 font-bold text-center">
          Login Here
        </h2>
        <form onSubmit={loginHandler} className="login-form mt-10">
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
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
