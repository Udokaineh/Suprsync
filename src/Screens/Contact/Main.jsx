import Header from "../../Component/Header/Header";
import Button from "../../Component/Button/Button";
import { contactImg } from "../../Assets";



const Main = () => {
    return (
        <div className="flex flex-col justify-start items-center">
            <Header />
            <div className="px-[80px] pt-[140px] pb-[20px] flex flex-row gap-[24px] justify-center items-center sm:px-6 sm:pt-[120px]">
                <div className="flex flex-col gap-[48px] sm:gap-[32px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-[52px] font-semibold sm:text-[22px]">Get in touch</p>
                        <p className="text-[22px] leading-[36px] sm:text-[14px] sm:leading-[19px]">We’re happy to answer any questions you may have,
                            just send us a message and we’d get back to you shortly</p>
                    </div>
                    <form name="contact form" className="w-[512px] md:w-full flex flex-col gap-[32px]">
                        <div className="flex flex-col justify-start items-start gap-[10px]">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter name" className="px-[16px] py-[14px] border border-[#939393] rounded-[24px] w-full" />
                        </div>

                        <div className="flex flex-col justify-start items-start gap-[10px]">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" name="email" placeholder="Enter email address"
                                className="px-[16px] py-[14px] border border-[#939393] rounded-[24px] w-full" />
                        </div>

                        <div className="flex flex-col justify-start items-start gap-[10px]">
                            <label htmlFor="message">Message</label>
                            <textarea placeholder="Type your message here..." id="message" name="message" cols="" rows=""
                                className="w-full px-[16px] py-[14px] border border-[#939393] rounded-[24px]"
                            ></textarea>
                        </div>
                        <div className="w-full flex flex-row justify-start md:justify-center items-center">
                            <Button
                                withIcon={false}
                                className="!h-[55px] !w-[496px] sm:!w-full sm:!h-[40px]"
                                text={'Send message'}
                            />
                        </div>
                    </form>
                </div>
                <div className="block md:hidden">
                    <img src={contactImg} alt="contact" />
                </div>
            </div>
        </div>
    )
}


export default Main;