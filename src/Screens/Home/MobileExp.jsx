import { mobileImg } from "../../Assets"
import Container from "../../Component/Container"
import Button from "../../Component/Button/Button"

const MobileExp = () => {
    return (
        <Container className="!py-[60px] mobilebackground">
            <div className="flex flex-row md:flex-col items-center gap-10">
                <div className=" flex flex-col gap-[31px] w-[70%] md:w-full">
                    <div className="flex flex-col gap-3">
                        <p className=" text-center rounded-[20px] justify-center items-center p-2.5 bg-FEE uppercase text-14 font-medium w-[160px]">free download</p>
                        <p className="text-[50px] font-semibold leading-[64px] sm:text-[24px] sm:leading-[34px]">Experience our Service on Mobile.</p>
                        <p className="text-[24px] text-[#606060] sm:text-[14px]">Our service can be experienced seamlessly on your mobile device.</p>
                    </div>

                    <div className="flex flex-row justify-start items-center gap-10">
                        <Button
                            withIcon={false}
                            className="!h-[55px] !w-[242px]"
                            text={'Download on App Store'}
                        />
                        <Button
                            withIcon={false}
                            className="!h-[55px] !w-[243px]"
                            text={'Download on Play Store'}
                            type="outline"
                        />
                    </div>

                </div>

                <div className="sm:h-[342px]">
                    <img src={mobileImg} className="rounded-[14px]" alt="mobile" />
                </div>
            </div>
        </Container>
    )
}

export default MobileExp