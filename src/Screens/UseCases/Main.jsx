import Header from "../../Component/Header/Header"
import Button from "../../Component/Button/Button"
import { usecaseHero } from "../../Assets"


const Main = () => {
    return (
        <div className="flex flex-col justify-start items-center imagebackground">
            <Header />

            <div className="px-[80px] pt-[140px] flex flex-row md:flex-col md:gap-[32px] gap-[80px] items-center sm:px-6 sm:pt-[120px] sm:pb-[20px]">
                <div className="flex flex-col gap-[40px] md:gap-[20px]">
                    <div className=" flex flex-col gap-[12px]">
                        <p className="text-[48px] md:text-[40px] sm:text-[24px] font-semibold">Where SuprSync can be used.</p>
                        <p className="text-[24px] sm:text-[14px] text-[#606060]">Explore a variety of real-world scenarios where SuperSync enhances collaboration and streamlines workflows across diverse industries.</p>
                    </div>

                    <a href="https://app.nitroserve.co/signup">
                        <Button className="w-[139px] h-[55px]" text={"Get Started"} />
                    </a>
                </div>

                <div className="w-full">
                    <img src={usecaseHero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main