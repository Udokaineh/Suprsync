import { integrationImg } from "../../Assets"


const Integrations = () => {
    return (
        <div className="flex flex-row gap-[80px] md:flex-col md:gap-[36px] items-center sm:px-6">
            <div className="flex flex-col gap-[12px]">
                <p className="text-[44px] sm:text-[24px] md:text-center font-semibold">Seamless Connectivity</p>
                <p className="text-[24px] sm:text-[14px] sm:text-center font text-[#606060]">Enhance workflow efficiency with SuperSync's integration capabilities, seamlessly connecting with your favorite tools and applications for streamlined collaboration.</p>
            </div>

            <div className="w-full">
                <img src={integrationImg} alt="" />
            </div>
        </div>
    )
}


export default Integrations