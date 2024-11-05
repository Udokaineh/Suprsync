import { workflowImg } from "../../Assets"
import Container from "../../Component/Container"


const Workflow = () => {
    return (
        <Container className="!py-[60px] sm:!pt-[30px] sm:!pb-[0]">
            <div className="flex flex-col gap-[70px] md:gap-[32px]">
                <div className="flex flex-col items-center justify-start gap-[10px]">
                    <div className="flex flex-col justify-center items-center gap-[6px]">
                        <p className="text-center rounded-[20px] justify-center items-center p-2.5 bg-FEE uppercase text-16 font-medium sm:text-[12px]">Use cases</p>
                        <p className=" text-center text-[48px] font-semibold md:text-[40px] sm:leading-[34px] sm:text-[24px]">Optimized Workflow Management</p>
                    </div>
                    <div className="w-[60%] md:w-full text-center">
                        <p className="text-[#606060] sm:text-[14px]">SuprSync can be used in various industries like
                            Medical Institutions, Restaurants and Construction Teams</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col md:gap-[19px] gap-[80px] items-center">
                    <div className="flex flex-col gap-[50px] sm:gap-[34px]">
                        <div className="flex flex-row justify-center items-center sm:flex-col gap-[32px] sm:gap-[14px]">
                            <div className="h-[72px] w-[4px] sm:w-[72px] sm:h-[4px] rounded-md bg-[#00AD57]"></div>
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-[24px] sm:text-center sm:text-[16px] font-semibold text-[#3B3B3B]">Shift Creation</p>
                                <p className="text-[18px] text-[#606060] sm:text-center">Swiftly generate comprehensive shift schedules tailored to the unique needs of medical institutions, ensuring  seamless coordination of healthcare professionals.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center sm:flex-col gap-[32px] sm:gap-[14px]">
                            <div className="h-[72px] w-[4px] sm:w-[72px] sm:h-[4px] rounded-md bg-[#00AD57]"></div>
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-[24px] sm:text-center sm:text-[16px] font-semibold text-[#3B3B3B]">Messaging</p>
                                <p className="text-[18px] text-[#606060] sm:text-center">Enhance collaboration and information exchange among healthcare teams with SuperSync's integrated messaging feature, facilitating quick and secure communication.</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center items-center sm:flex-col gap-[32px] sm:gap-[14px]">
                            <div className="h-[72px] w-[4px] sm:w-[72px] sm:h-[4px] rounded-md bg-[#00AD57]"></div>
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-[24px] sm:text-center sm:text-[16px] font-semibold text-[#3B3B3B]">Swap Shifts</p>
                                <p className="text-[18px] text-[#606060] sm:text-center">Seamlessly exchange shifts through SuperSync's user-friendly platform, fostering flexibility and ensuring continuity of care without cumbersome administrative processes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <img src={workflowImg} alt="" />
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Workflow