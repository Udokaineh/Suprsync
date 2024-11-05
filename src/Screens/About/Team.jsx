import { team1, team2, team3 } from "../../Assets"
import Container from "../../Component/Container"


const Team = () => {
    return (
        <Container className="bg-[#F8FCF9] pb-[40PX]">
            <div className="flex flex-col justify-start items-center gap-[50px] md:gap-[34px]">
                <div className="flex flex-col justify-center items-center gap-[12px]">
                    <p className=" text-center rounded-[20px] justify-center p-2.5 items-center bg-FEE uppercase text-14 font-medium w-[101px] sm:text-[12px]">Our Team</p>
                    <p className="text-[44px] font-semibold text-center sm:text-[22px]">Amazing team behind our company</p>
                    <p className="text-[20px] text-[#747474] text-center sm:text-[14px]">Get to Know the Faces Behind SuperSync</p>
                </div>

                <div className="flex flex-row md:flex-col gap-[40px] justify-between md:py-[35px] md:gap-[32px]">
                    <div className="flex flex-col justify-start items-center gap-[16px]">
                        <img className="w-[378px] h-[372px] md:w-[283px] md:h-[250px]" src={team1} alt="" />
                        <div className="flex flex-col justify-center items-center gap-[12px]">
                            <p className="text-[20px] font-semibold">Tobias Adewale</p>
                            <p className="text-[16px] text-[#00AD57]">Founder & CEO</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-[16px]">
                        <img className="w-[378px] h-[372px] md:w-[283px] md:h-[250px]" src={team2} alt="" />
                        <div className="flex flex-col justify-center items-center gap-[12px]">
                            <p className="text-[20px] font-semibold">Tobias Adewale</p>
                            <p className="text-[16px] text-[#00AD57]">Founder & CEO</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-[16px]">
                        <img className="w-[378px] h-[372px] md:w-[283px] md:h-[250px]" src={team3} alt="" />
                        <div className="flex flex-col justify-center items-center gap-[12px]">
                            <p className="text-[20px] font-semibold">Tobias Adewale</p>
                            <p className="text-[16px] text-[#00AD57]">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Team