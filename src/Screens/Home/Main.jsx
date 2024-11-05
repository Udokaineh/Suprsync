import Button from "../../Component/Button/Button"
import { animation, heroImg, mobileHero } from "../../Assets"
import Header from "../../Component/Header/Header"
import "./Home.css"


const Main = () => {
  return (
    <div className="flex flex-col justify-start items-center imagebackground">
      <Header />

      <div className="flex flex-col px-[80px] pt-[140px] sm:px-6 sm:pt-[120px] gap-[54px] md:gap-[43px] justify-center items-center sm:flex-col sm:justify-start">

        <div className="w-[70%] md:w-full sm:justify-start self-center sm:self-start">
          <div className=" flex flex-col justify-center sm:justify-start items-center sm:items-start gap-4 md:w-full">

            <div className="flex flex-row rounded-[20px] justify-center items-center gap-2.5 p-2.5 bg-FEE">
              <img className="w-[30px] sm:w-[20]" src={animation} alt="" />
              <p className="uppercase text-14 sm:text-[8px] font-medium">Fully Integrated Schedulling System</p>
            </div>

            <p className="text-[52px] text-center sm:text-left sm:text-[24px] font-semibold sm:font-bold text-black-500 leading-[70px] sm:leading-8">
              Efficiently manage employees and promote productivity.
            </p>
            <p className="text-[24px] leading-[36px] text-center sm:text-left sm:text-[14px] sm:leading-[24px] text-[#606060]">
              Take Control of Your Workforce Management and Scheduling Tasks with Our Employee-centric App
            </p>

            <div className="flex flex-row justify-center mt-2 items-center gap-10">
              <a href="https://app.nitroserve.co/signup">
                <Button
                  withIcon={false}
                  className="!h-[55px] !w-[139px] sm:!w-[100px] sm:!h-[40px]"
                  text={'Get started'}
                />
              </a>
              
              <Button
                withIcon={true}
                className="!h-[56px] !w-[238px] sm:!w-[181px] sm:!h-[41px]"
                text={'Watch how it works'}
                type="outline"
              />
            </div>
          </div>
        </div>

        <div className="h-[580px] w-full md:h-[350px] overflow-hidden sm:h-[293px] flex flex-col justify-start items-center">
          <img className=" w-[1222px] sm:hidden" src={heroImg} alt="hero-img" />
          <img className="w-full hidden object-none sm:inline-block" src={mobileHero} alt="main" />
        </div>
      </div>

    </div>
  )
}

export default Main