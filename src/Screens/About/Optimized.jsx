import { add, divider, optimize } from "../../Assets"
import Container from "../../Component/Container"


const Optimized = () => {
    return (
        <Container className="flex flex-col gap-[82px] md:gap-[60px]">
            <div className="w-full flex flex-row md:flex-col justify-between items-center gap-[35px]">
                <div className="w-[65%] md:w-full">
                    <p className="text-[44px] font-semibold sm:text-[24px] md:text-center">Optimize employee management for increased productivity</p>
                    <p className="text-[20px] text-[#747474] sm:text-[14px] md:text-center">Founded with a passion for technological advancement and a commitment to organisation success, SuprSync  is dedicated to revolutionizing the way organizations manage their workforce and resources.</p>
                </div>
                <div className="flex flex-row gap-[13px]">
                    <div className="flex flex-col justify-center items-center" >
                        <p className=" flex flex-row text-[48px] font-semibold">3
                            <img src={add} alt="" />
                        </p>
                        <p className="text-[16px] text-[#747474]">Years of experience</p>
                    </div>

                    <img src={divider} alt="divided" />

                    <div className="flex flex-col justify-center items-center">
                        <p className=" flex flex-row text-[48px] font-semibold">20
                            <img src={add} alt="" />
                        </p>
                        <p className="text-[16px] text-[#747474]">Satisfied companies</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[40px] md:gap-[30px] pb-7">
                <div className="flex flex-col gap-[12px]">
                    <p className="text-[44px] font-semibold sm:text-[22px] md:text-center">We have successfully enhanced client business with our SaaS solutions</p>
                    <p className="text-[20px] text-[#747474] sm:text-[14px] md:text-center">Welcome to SuprSync, your all-in-one solution for seamless workforce management. Designed with the needs of modern organizations in mind, SuprSync combines intuitive tools with the power of artificial intelligence to streamline operations and drive productivity.
                        With SuprSync, managing your staff has never been easier. Create and assign shifts with a few simple clicks, ensuring optimal staffing levels and minimizing scheduling conflicts. Our intuitive interface makes it easy to monitor employee availability, track hours worked, and manage payroll efficiently.
                        But that's not all. SuprSync goes beyond traditional workforce management solutions by offering robust inventory management capabilities. Keep track of your inventory levels, manage stock movement, and streamline purchasing processes with ease.
                        Need to make changes to your schedule on the fly? No problem. SuprSync allows for seamless shift swaps, ensuring that your team remains flexible and adaptable to changing needs. And with the assistance of AI, SuprSync can even suggest optimal shift assignments based on employee availability and workload.</p>
                </div>

                <img src={optimize} alt="" />
            </div>
        </Container>
    )
}

export default Optimized