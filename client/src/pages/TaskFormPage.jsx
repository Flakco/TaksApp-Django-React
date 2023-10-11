import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const TaskFormPage = () => {

  const {register, handleSubmit, formState:{errors}, setValue} = useForm();

  const navigate = useNavigate();
  const params = useParams();


  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success("Tarea actualizada",{
        position: 'bottom-right',
        style:{
          background: '#101010',
          color: '#fff'
        }
      })
    } else {
      await createTask(data)
      toast.success("Tarea creada",{
        position: 'bottom-right',
        style:{
          background: '#101010',
          color: '#fff'
        }
      })
    }
    navigate("/tasks")
  })
  
  useEffect(() => {
  async function loadTask(){
    if (params.id) {
      const res = await getTask(params.id)
      setValue('title', res.data.title)
      setValue('description', res.data.description)      
    }
  }
  loadTask();
  }, [])

  return (
    <div className='max-w-xl mx-auto bg-zinc-800 rounded'>
      <form className="bg-zinc-800 p-10 rounded-lg mt-2" onSubmit={onSubmit}>
        <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" type="text" placeholder="Title" {...register("title", {required: true})}/>
        {errors.title && <span>title is required</span>}

        <textarea className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" rows="3" placeholder="Description" {...register("description", {required: true})}></textarea>
        {errors.description && <span>description is required</span>}

        <button className="bg-rose-500 rounded block w-full mt-3 p-3">Save</button>
      </form>

      {params.id && <div className="bg-zinc-800 p-10 rounded-lg "><button className="bg-rose-500 rounded block w-full mt-3 p-3" onClick={async() => {
        const accepted = window.confirm('Estas seguro que quieres eliminar esta tarea?')
        if (accepted) {
          await deleteTask(params.id);
          toast.success("Tarea eliminada",{
            position: 'bottom-right',
            style:{
              background: '#101010',
              color: '#fff'
            }
          })
          navigate("/tasks");
        }
      }}>Delete</button></div>}
    </div>
  )
}

export default TaskFormPage