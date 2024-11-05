import { mobileQuick, number1, number2, number3, quickImg } from "../../Assets"
import Container from "../../Component/Container"
import Button from "../../Component/Button/Button"

const QuickGuide = () => {
    return (
        <Container className="!py-[60px] md:!py-[40px]">
            <div className="bg-[#EEF9F4] rounded-[36px] md:rounded-[12px] px-[58px] py-[67px] md:py-[30px] flex flex-col gap-[46px]">
                <div className="flex flex-row justify-between">
                    <p className="text-[52px] text-[#034F29] font-semibold leading-[64px] w-[60%] md:w-full sm:text-[24px] sm:leading-[34px] md:text-center">Quick and easy guide to using our service.</p>
                    <a href="https://app.nitroserve.co/signup">
                        <Button className="w-[139px] h-[55px] md:hidden" text={"Get Started"} />
                    </a>
                </div>

                <div className="flex flex-row justify-center items-center gap-12 md:flex-col">
                    <div className="flex flex-col items-start md:items-center gap-9">

                        <div className="flex flex-row md:flex-col md:items-center items-start gap-5">
                            <img src={number1} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Create Your Account</p>
                                <p className="text-[#676767] text-[18px]  md:text-center">Create your account by visiting our website and filling in your details.</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number2} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Activate Your Plan</p>
                                <p className="text-[#676767] text-[18px]  md:text-center">Activate your plan by selecting the subscription tier that best suits your needs and confirming your payment information.</p>
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-start md:items-center gap-5">
                            <img src={number3} alt="number icon" />
                            <div>
                                <p className="text-[24px] font-semibold md:text-center">Access all Features</p>
                                <p className="text-[#676767] text-[18px] md:text-center">Once your plan is activated, you'll gain access to all features included in your subscription, allowing you to manage your workforce, control inventory, schedule tasks, and utilize AI assistance effectively.</p>
                            </div>
                        </div>

                        <Button className="w-[139px] h-[55px] hidden md:block" text={"Get Started"} />
                    </div>

                    <div className="w-full">
                        <img className="block sm:hidden" src={quickImg} alt="quick" />
                        <img className="hidden sm:block" src={mobileQuick} alt="quick" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default QuickGuide
