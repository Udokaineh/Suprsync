import { ayoavatar, johnavatar, paulaavatar, sarahavatar, stars } from "../../Assets"
import Container from "../../Component/Container"
import Marquee from "react-fast-marquee";

const Feedback = () => {

    return (
        <Container className="!py-[60px] md:!py-[20px]">
            <div className="bg-[#004B26] rounded-[36px] sm:rounded-[12px] py-[67px] flex flex-col gap-[70px]">
                <div className="flex flex-col items-center gap-3 md:px-[24px] ">
                    <p className="text-[48px] text-center text-[#fff] font-medium leading-[64px] sm:text-[24px] sm:leading-[34px]">Our clients shared their love for SuprSync</p>
                    <p className="text-[#E2E0E0] text-[24px] text-center w-[60%] sm:w-full sm:text-[14px] ">See what people are saying about SuprSync</p>
                </div>

                <Marquee speed={60}>
                    <div className="flex flex-row sm:flex-col justify-start sm:items-center items-start pl-[24px] gap-6 overflow-x-scroll sm:overflow-y-scroll min-w-[100%] sm:h-[100vh]">

                        <div className="flex-shrink-0 rounded-[14px]">
                            <div className="bg-[#043C20] px-[23px] py-[26px] flex flex-col items-center gap-[33px] text-[#fff] rounded-[14px] w-[326px] sm:w-[269px]">
                                <p className="italic text-[18px] text-center sm:text-[14px]">"SuprSync has revolutionized our scheduling process! With its intuitive interface and robust features, we've streamlined our employee management, resulting in increased productivity and happier staff."</p>
                                <div className="flex flex-col items-center justify-center gap-[18px]" >
                                    <img className="w-[126px] h-[22px]" src={stars} alt="star icon" />
                                    <div className="flex flex-col items-center justify-center gap-[7px]">
                                        <img className="w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]" src={johnavatar} alt="" />
                                        <p className="text-[18px] sm:text-[16px] font-medium">John Fons</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="bg-[#043C20] px-[23px] py-[26px] flex flex-col items-center gap-[33px] text-[#fff] rounded-[14px] w-[326px] sm:w-[269px]">
                                <p className="italic text-[18px] sm:text-[14px] text-center">"We've been using SuprSync for over a year now, and it's become an indispensable part of our business operations. Its user-friendly interface makes it easy for our employees to manage their schedules, while its automation features have saved us countless hours of manual work."</p>
                                <div className="flex flex-col items-center justify-center gap-[18px]" >
                                    <img className="w-[126px] h-[22px]" src={stars} alt="star icon" />
                                    <div className="flex flex-col items-center justify-center gap-[7px]">
                                        <img className="w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]" src={ayoavatar} alt="" />
                                        <p className="text-[18px] sm:text-[16px]  font-medium">Ayo Shogun</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="bg-[#043C20] px-[23px] py-[26px] flex flex-col items-center gap-[33px] text-[#fff] rounded-[14px] w-[326px] sm:w-[269px]">
                                <p className="italic text-[18px] sm:text-[14px] text-center">“The customer support is always top notch and always avaliable to answer any questions and resolve any issue in a timely manner."</p>
                                <div className="flex flex-col items-center justify-center gap-[18px]" >
                                    <img className="w-[126px] h-[22px]" src={stars} alt="star icon" />
                                    <div className="flex flex-col items-center justify-center gap-[7px]">
                                        <img className="w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]" src={paulaavatar} alt="" />
                                        <p className="text-[18px] sm:text-[16px]  font-medium">Paula Michaelson</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="bg-[#043C20] px-[23px] py-[26px] flex flex-col items-center gap-[33px] text-[#fff] rounded-[14px] w-[326px] sm:w-[269px]">
                                <p className="italic text-[18px] sm:text-[14px] text-center">"Switching to SuprSync was one of the best decisions we've made for our business. Not only has it saved us time and money, but it has also improved employee morale by giving them more control over their schedules. We couldn't be happier with the results!"</p>
                                <div className="flex flex-col items-center justify-center gap-[18px]" >
                                    <img className="w-[126px] h-[22px]" src={stars} alt="star icon" />
                                    <div className="flex flex-col items-center justify-center gap-[7px]">
                                        <img className="w-[50px] h-[50px] rounded-[50%] bg-[#D9D9D9]" src={sarahavatar} alt="" />
                                        <p className="text-[18px] sm:text-[16px]  font-medium">Sarah Samuel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </Container>
    )
}

export default Feedback