import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='flex justify-between py-4'>
        <Link to='tasks'>
            <h1 className='font-bold text-lg mb-4'>Task App</h1>
        </Link>
        <button className='bg-indigo-600 px-3 rounded text-xs'>
            <Link to='/tasks-create'>create task</Link>
        </button>
    </div>
  )
}

export default Navigation