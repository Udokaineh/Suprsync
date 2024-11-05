import React from "react"
import Button from "../Component/Button/Button"
import { Link } from "react-router-dom"
import Header from "../Component/Header/Header"
import Footer from "../Component/Footer/Footer"
import { notfound } from "../Assets"


const NotFound = () => {
    return (
        <div className="">
            <Header />
            <div className="px-[80px] pt-[140px] sm:px-6 sm:pt-[120px] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-[32px]">
                    <div className="flex flex-col justify-center items-center gap-[16px]">
                        <p className="text-[#313131] text-[48px] font-semibold text-center">Ooops, page not found</p>
                        <p className="text-[#707070] text-[24px] text-center w-[712px]">We are sorry for the inconvenience. It looks like you’re trying to access a page we’re working on</p>
                    </div>
                    <div>
                        <Link to="/">
                            <Button
                                withIcon={false}
                                className="!h-[55px] !w-[141px] sm:!w-[100px] sm:!h-[40px]"
                                text={'Go to Home'}
                            />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <img src={notfound} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound