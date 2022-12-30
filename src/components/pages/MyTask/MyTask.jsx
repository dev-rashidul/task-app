import { useContext, useEffect, useState } from "react";
import swal from 'sweetalert';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SingleTask from "./SingleTask/SingleTask";

const MyTask = () => {
  // Get User from context using useContext
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(
      `https://todo-app-server-fawn.vercel.app/my-tasks?user_email=${email}`
    )
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, [email, tasks]);


  const handleDelete = (id) => {
    fetch(`https://todo-app-server-fawn.vercel.app/task/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = tasks.filter((tsk) => tsk._id !== id);
          setTasks(remaining);
          swal("Good job!", "Task deleted successfully!", "success");
        }
      });
  };


  return (
    <>
      <section>
        <h2 className="text-3xl md:text-4xl font-medium text-center my-10">
          Welcome,{" "}
          <span className="text-purple-600 font-bold">{displayName}</span>
        </h2>
       <div className="container mx-auto">
       <div>
          {tasks.map(task => <SingleTask key={task._id} task={task} handleDelete={handleDelete}></SingleTask>)}
        </div>
       </div>
      </section>
    </>
  );
};

export default MyTask;
