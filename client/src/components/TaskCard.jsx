import { useNavigate } from 'react-router-dom';

function TaskCard( {task} ) {

    const navigate = useNavigate();

  return (
    <div className="bg-zinc-800 p-3 hover:bg-indigo-600 over:cursor-pointer rounded text-white " onClick={() => {
        navigate(`/tasks/${task.id}`)
    }}>
        <h1 className='font-bold uppercase'>{task.title}</h1>
        <p className='text-gray-400' >{task.description}</p>
    </div>
  )
}

export default TaskCard