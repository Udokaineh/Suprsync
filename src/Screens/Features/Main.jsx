import Header from "../../Component/Header/Header"
import Button from "../../Component/Button/Button"
import { featureHero } from "../../Assets"


const Main = () => {
    return (
        <div className="flex flex-col justify-start items-center imagebackground">
            <Header />

            <div className="px-[80px] pt-[140px] flex flex-row gap-[40px] md:gap-[32px] md:flex-col items-center sm:px-6 sm:pt-[120px] sm:pb-[20px]">
                <div className="flex flex-col gap-[40px] md:gap-[20px]">
                    <div className="flex flex-col gap-[12px]">
                        <p className="text-[48px] sm:text-[24px] font-semibold">Prime Functionalities</p>
                        <p className="text-[24px] sm:text-[14px] font text-[]#606060">Explore the core functionalities that power productivity, streamline workflow efficiency  and enable collaboration within SuperSync.</p>
                    </div>

                    <a href="https://app.nitroserve.co/signup">
                        <Button className="w-[139px] h-[55px]" text={"Get Started"} />
                    </a>
                </div>

                <div className="w-full">
                    <img src={featureHero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main