
const TaskCard = () => {
  return (
    <div className="max-w-3xl rounded-2xl mx-auto px-8 py-2 shadow-sm bg-base-100">
       <h1 className="text-2xl font-semibold mb-">Title:</h1>
       <p className="text-lg font-semibold">Description:</p>
       <div className="flex items-center space-x-3 justify-end">
           <button className="btn btn-sm">Edit</button>
           <button className="btn btn-sm">Cancel</button>
            <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm">Save ⬆️</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-46 p-2 shadow-sm">
                <li><a className="text-primary">Pending</a></li>
                <li><a className="text-error">Open</a></li>
                <li><a className="text-gray-500">Resolved</a></li>
            </ul>
        </div>
            
       </div>
    </div>
  )
}

export default TaskCard