import Navbar from "@/components/Navbar"

const TaskLayout = ({ children }) => {
 return (
    <div className="h-screen">
        <Navbar/>
        { children }
    </div>
 )
}

export default TaskLayout