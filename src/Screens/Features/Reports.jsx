import { reportsImg } from "../../Assets"


const Reports = () => {
    return (
        <div className="flex flex-row gap-[80px] md:flex-col md:gap-[36px] items-center sm:px-6">
        <div className="flex flex-col gap-[12px]">
            <p className="text-[44px] sm:text-[24px] md:text-center font-semibold">Insightful Data Analysis</p>
            <p className="text-[24px] sm:text-[14px] sm:text-center font text-[#606060]">Explore how SuperSync provides in-depth reports and analytics, giving you valuable insights to make informed decisions and improve productivity effortlessly.</p>
            </div>

            <div className="w-full">
                <img src={reportsImg} alt="" />
            </div>
        </div>
    )
}


export default Reports