import { syncImg } from "../../Assets"


const SyncAI = () => {
    return (
        <div className="flex flex-row gap-[80px] md:flex-col md:gap-[36px] items-center sm:px-6">
            <div className="flex flex-col gap-[12px]">
                <p className="text-[44px] sm:text-[24px] md:text-center font-semibold">Smart Automation</p>
                <p className="text-[24px] sm:text-[14px] sm:text-center font text-[#606060]">Say goodbye to lengthy training sessions and constant back-and-forth emails. With our AI Q&A feature, your team can get the information they need with just a simple question.</p>
            </div>

            <div className="w-full">
                <img src={syncImg} alt="" />
            </div>
        </div>
    )
}


export default SyncAI