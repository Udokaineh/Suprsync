import Container from "../../Component/Container"
import { friendlyIcon, growthImg, multipleTools, supportIcon } from "../../Assets"



const OrgGrowth = () => {
    return (
        <Container className="pt-[60px] sm:pt-[13px]">
            <div className="flex flex-row md:flex-col items-center justify-center gap-10">
                <div className=" flex flex-col gap-[31px] w-[70%] md:w-full">
                    <div>
                        <p className="text-[48px] font-semibold sm:text-[24px] md:text-center">Built for promoting growth within Organisation.</p>
                        <p className="text-[24px] font-normal text-060 sm:text-[14px] md:text-center">With our array of tools for managing multiple employees, SuperSync ensures efficiency and growth.</p>
                    </div>

                    <div className="flex flex-row items-center sm:flex-col justify-between gap-4">
                        <div className="flex flex-col md:items-center py-[12px] gap-3">
                            <img className="w-[50px] h-[50px]" src={multipleTools} alt=" multiple icon" />
                            <div className="flex flex-col gap-3 md:items-center">
                                <p className="text-[20px] font-semibold">Multiple tools</p>
                                <p className="text-060 md:text-center">Provides a wide range of tools tailored to streamline your tasks and enhance productivity in your organisation.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:items-center py-[12px] gap-3">
                            <img className="w-[50px] h-[50px]" src={friendlyIcon} alt=" friendly icon" />
                            <div className="flex flex-col gap-3 md:items-center">
                                <p className="text-[20px] font-semibold">User friendly</p>
                                <p className="text-060 md:text-center">Our user-friendly interface guarantees easy navigation, enabling swift access to the appropriate tools.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:items-center py-[12px] gap-3">
                            <img className="w-[50px] h-[50px]" src={supportIcon} alt="support icon " />
                            <div className="flex flex-col gap-3 md:items-center">
                                <p className="text-[20px] font-semibold">Support</p>
                                <p className="text-060 md:text-center">Ensuring seamless experiences relies heavily on providing support, highlighting its crucial role in the process.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="sm:w-[350px] sm:h-[407px]">
                    <img src={growthImg} alt="" />
                </div>
            </div>
        </Container>
    )
}

export default OrgGrowth
