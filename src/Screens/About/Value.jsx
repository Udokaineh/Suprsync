import { missionIcon, visionIcon } from "../../Assets"
import Container from "../../Component/Container"

const Value = () => {
    return (
        <Container className="bg-[#F8FCF9]">
             <div className=" flex flex-col gap-[48px] w-full">
                    <div className="flex flex-col justify-center">
                        <p className="text-[50px] font-semibold sm:text-[24px] text-center">Values that bind us at Suprsync.</p>
                        <p className="text-[24px] font-normal text-060 sm:text-[14px] text-center">Discover what makes SuperSync stand out</p>
                    </div>

                    <div className="flex flex-row items-center md:flex-col justify-between gap-[40px] pb-[30px]">
                        <div className="bg-[#fff] flex flex-col py-[12px] gap-3 rounded-[12px] p-[24px]">
                            <img className="w-[50px] h-[50px]" src={visionIcon} alt=" multiple icon" />
                            <div className="flex flex-col gap-3">
                                <p className="text-[20px] font-semibold">Our Vision</p>
                                <p className="text-060">Our vision at SuprSync is to be the leading provider of intelligent workforce management solutions, recognized for our dedication to innovation, customer satisfaction, and industry expertise. We envision a future where businesses can effortlessly optimize their operations with the help of our platform, enabling them to focus on what matters most - their success. Through continuous innovation and collaboration, we strive to empower businesses worldwide to thrive in the digital age.</p>
                            </div>
                        </div>

                        <div className="flex flex-col py-[12px] gap-3 bg-[#fff] rounded-[12px] p-[24px]">
                            <img className="w-[50px] h-[50px]" src={missionIcon} alt=" friendly icon" />
                            <div className="flex flex-col gap-3">
                                <p className="text-[20px] font-semibold">Our Mission</p>
                                <p className="text-060">At SuprSync, our mission is to revolutionize the way businesses manage their operations by providing innovative and intuitive solutions that streamline processes, enhance productivity, and drive growth. We are committed to empowering organizations of all sizes to achieve their full potential by offering comprehensive tools and exceptional support tailored to their unique needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    )
}


export default Value