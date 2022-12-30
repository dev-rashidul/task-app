const SingleTask = ({task, handleDelete}) => {

const {task_name, task_image} = task;

  return (
    <div className="task-card flex flex-wrap justify-between items-center task-card-wrapper bg-purple-50 px-5 rounded-md mb-5">
      <div className="flex flex-col justify-center items-center my-5">
        <img className="w-16 h-16 object-cover border-2 border-purple-600 rounded-full mb-4" src={task_image} alt="task-img" />
        <h3 className="text-xl md:text-2xl text-purple-600 font-bold">Task : {task_name}</h3>
      </div>
      <button className="text-lg text-green-500 font-bold my-5">Complete Task</button>
      <button className="text-lg text-red-600 font-medium my-5">Incomplete Task</button>
      <button className="bg-green-500 text-white py-2 px-5 rounded-md my-5">Edit</button>
      <button onClick={() => handleDelete(task._id)} className="bg-red-600 text-white py-2 px-5 rounded-md my-5">Delete</button>
    </div>
  );
};

export default SingleTask;
