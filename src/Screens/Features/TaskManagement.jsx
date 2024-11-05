import { taskImg } from "../../Assets"


const TaskManagement = () => {
    return (
        <div className="flex flex-row gap-[80px] md:flex-col md:gap-[36px] items-center sm:px-6">
            <div className="flex flex-col gap-[12px]">
                <p className="text-[44px] sm:text-[24px] md:text-center font-semibold">Manage tasks effectively</p>
                <p className="text-[24px] sm:text-[14px] sm:text-center font text-[#606060]">Explore SuperSync's task management capabilities designed to streamline workflows and boost productivity, empowering users to organize, prioritize, and track tasks efficiently.</p>
            </div>

            <div className="w-full">
                <img src={taskImg} alt="" />
            </div>
        </div>
    )
}


export default TaskManagement