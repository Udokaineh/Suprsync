import { feature1, feature2, feature3, feature4, feature5, mobileFeature2, mobileInteg, mobileInvent, mobileTask } from "../../Assets";
import Container from "../../Component/Container"

const Feature = () => {
    return (
        <Container className="!py-[60px] sm:!py-[30px]">
            <div className="flex flex-col items-center justify-start gap-[40px] sm:gap-[19px]">
                <div className=" flex flex-col justify-center items-center gap-6 w-[70%] md:w-full">
                    <p className=" text-center rounded-[20px] justify-center items-center p-2.5 bg-FEE uppercase text-14 font-medium w-[255px] sm:text-[12px]">The Future of Management</p>
                    <p className=" text-center text-[48px] font-semibold sm:text-[22px]">Features within SuprSync.</p>
                </div>

                <div className="hidden md:flex flex-col gap-[21px] ">
                    <img src={feature1} alt="" />
                    <div className="flex flex-row sm:flex-col gap-[8px]">
                        <div className="flex flex-row gap-[0] sm:gap-[12px] w-full">
                            <img className="w-[164px] h-[176px]" src={mobileFeature2} alt="" />
                            <img className="w-[164px] h-[176px]" src={mobileTask} alt="" />
                        </div>
                        <div className="flex flex-row items-center gap-[0] sm:gap-[12px] w-full">
                            <img className="w-[164px] h-[176px]" src={mobileInvent} alt="" />
                            <img className="w-[164px] h-[160px]" src={mobileInteg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px] md:hidden">
                    <div className="flex flex-row items-center md:flex-col justify-start gap-[33px]">
                        <div>
                            <img className="w-[704px] h-[355px]" src={feature1} alt="" />
                        </div>
                        <div>
                            <img className="w-[540px] h-[355px]" src={feature2} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center md:flex-col md:justify-center justify-between gap-[33px]">
                        <div className="w-[404px] h-[446px] xl:w-[350px] xl:h-[400px]">
                            <img className="" src={feature3} alt="" />
                        </div>
                        <div className="w-[404px] h-[446px] xl:w-[350px] xl:h-[400px]">
                            <img className="" src={feature4} alt="" />
                        </div>
                        <div className="w-[404px] h-[440px] xl:w-[350px] xl:h-[400px]">
                            <img className="" src={feature5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Feature;