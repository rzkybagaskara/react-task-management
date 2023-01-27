import Task from './Task';

// Menampilkan task yang ada pada tasks dengan bantuan map
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
