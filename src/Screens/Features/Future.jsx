import Container from "../../Component/Container"
import FeaturesNav from "./FeaturesNav"


const Future = () => {
    return (
        <Container className="!py-[60px] sm:!pt-[30px] sm:!pb-[0]">
            <div className="flex flex-col items-center justify-start gap-[24px] sm:gap-[19px]">
                <div className="flex flex-col justify-center items-center gap-[6px]">
                    <p className="text-center rounded-[20px] justify-center items-center p-2.5 bg-FEE uppercase text-16 font-medium sm:text-[12px]">Features</p>
                    <p className=" text-center text-[48px] font-semibold sm:text-[22px]">The Future of Management</p>
                </div>

                <div>
                    <FeaturesNav />
                </div>
            </div>

        </Container>
    )
}

export default Future
