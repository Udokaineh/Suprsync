import Header from "../../Component/Header/Header";
import { about1, about2 } from "../../Assets";



const Main = () => {
    return (
        <div className="flex flex-col justify-start items-center imagebackground">
            <Header />
            <div className="px-[80px] pt-[140px] sm:px-6 sm:pt-[120px]">
                <div className="flex flex-col gap-[53px] md:gap-[20px]">
                    <div className="flex flex-row md:flex-col justify-between items-end gap-[12px]">
                        <div className="flex flex-col gap-[17px] w-[100%]">
                            <p className=" text-center rounded-[20px] justify-center p-2.5 bg-FEE uppercase text-14 font-medium w-[195px] sm:text-[12px]">The Suprsync story</p>
                            <p className="text-[48px] md:text-[40px] font-bold sm:text-[22px]">Apex employee management</p>
                        </div>
                        <div className="w-[45%] md:w-full">
                            <p className="text-[20px] text-[##747474] sm:text-[14px]">SuprSync is more than just a workforce management tool; it's a partner in your success.</p>
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-col md:items-center gap-[24px] md:gap-[14px]">
                        <img className="w-[628px] h-[506px] xl:w-[628px] xl:h-[442px] md:w-[350px] md:h-[280px]" src={about1} alt="about" />
                        <img className="w-[628px] h-[506px] xl:w-[628px] xl:h-[442px] md:w-[350px] md:h-[280px]" src={about2} alt="about" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main