import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddTask = () => {
  // Get User from context using useContext
  const { user } = useContext(AuthContext);

  const taskHandler = (event: any) => {
    event.preventDefault();

    const form = event.target;
    const taskName = form.task.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=a61a3a6da2973ff4fbd64d7248e67456`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const task = {
          user_email: user?.email,
          task_name: taskName,
          task_image: data.data.display_url,
        };

        fetch("https://todo-app-server-fawn.vercel.app/add-task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              form.reset();
              swal("Good job!", "Task Added Successfully", "success");
            }
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="mt-20 lg:mt-40">
      <div className="login-wrapper w-full md:w-1/4 mx-auto bg-purple-50 shadow-md rounded-md py-10 px-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold mb-10">
          Add <span className="text-purple-600 font-bold">Task</span>
        </h2>
        <form onSubmit={taskHandler} className="login-form mt-10">
          <div className="input-group mb-5">
            <label>Task Name</label>
            <input
              className="w-full bg-white border-none py-2.5 px-5 focus:outline-0 rounded-md mt-2"
              type="text"
              name="task"
              placeholder="Enter Task Name"
              required
            />
          </div>
          <div className="input-group mb-5">
            <label>Task Image</label>
            <input
              className="w-full bg-white border-none py-2.5 px-5 focus:outline-0 rounded-md mt-2"
              type="file"
              name="image"
              required
            />
          </div>
          <div className="input-group">
            <button
              className="block w-full bg-purple-600 text-white font-medium py-2 rounded-md"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
