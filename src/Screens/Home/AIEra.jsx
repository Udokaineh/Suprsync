import Container from "../../Component/Container"
import { aiImg } from "../../Assets"
import Button from "../../Component/Button/Button"



const AIEra = () => {
    return (
        <Container className="!py-[60px] sm:!py-[30px]">
            <div className="flex flex-row md:flex-col-reverse items-center gap-[48px]">
                <div className="sm:w-[338px] sm:h-[362px]">
                    <img src={aiImg} alt="" />
                </div>

                <div className=" flex flex-col gap-[31px] w-[70%] md:w-full">
                    <p className="text-[50px] font-semibold sm:text-[24px] sm:leading-[34px] leading-[64px] sm:text-center">A New Era of Sync AI</p>
                    <p className="text-[24px] sm:text-[16px] sm:text-center text-[#606060]">Introducing our AI-powered Q&A feature, revolutionizing how staff members access information within the platform. With this cutting-edge capability, employees can simply ask questions using natural language, making it easier than ever to find the answers they need.
                        Empower your staff to be more productive and efficient by providing them with instant access to knowledge right within SuprSync. Say goodbye to lengthy training sessions and constant back-and-forth emails. With our AI Q&A feature, your team can get the information they need, when they need it, with just a simple question.</p>

                    <div className="flex flex-row justify-start  items-start sm:justify-center sm:items-center">
                        <a href="https://app.nitroserve.co/signup">
                            <Button
                                withIcon={false}
                                className="!h-[55px] !w-[139px] sm:!w-[100px] sm:!h-[40px]"
                                text={'Get started'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AIEra