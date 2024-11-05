import Button from "../../Component/Button/Button"

const Card = ({selected}) => {
    return (
        <div className="flex flex-row md:flex-col justify-center items-center gap-[40px] w-full">
            <div className="bg-[#fff] flex flex-col gap-8 px-[30px] py-[40px] rounded-[18px] plan-card">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-[24px] font-semibold">Basic plan</p>
                        <p className="text-[14px] text-[#606060]">Ideal for small businesses and startups</p>
                    </div>
                    <ul>
                        <li className="li">Up to <span> 10 users </span> allowed </li>
                        <li className="li">Up to <span> 3 job roles </span>allowed</li>
                        <li className="li">Up to <span>1 location</span>  allowed</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6 items-start pb-6 border-b-1">
                        <p className="text-[32px] font-bold">Free</p>
                        <Button
                            className="bg-primary !w-full !h-[46px]"
                            text={"Get Started"}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-bold">Features</p>
                        <ul>
                            <li className="features-li">Basic shift scheduling</li>
                            <li className="features-li">Easy communication</li>
                            <li className="features-li">Create & assign tasks</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8 px-[30px] pt-[14px] pb-[40px] bg-[#057E42] text-[#fff] rounded-[18px] plan-card">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-end md:justify-start">
                            <div className="flex flex-row items-center text-center text-[14px] rounded-[40px] bg-[#fff] text-[#000] font-semibold px-[18px] py-[14px] h-[46px]">
                                Best Plan
                            </div>
                        </div>
                        <p className="text-[24px] font-semibold">Professional Plan</p>
                        <p className="text-[16px] text-[#EDEDED]">Designed for  larger enterprises</p>
                    </div>
                    <ul>
                        <li className="text-[#EDEDED] li">Up to <span className="text-[#FFF]"> 50 users </span> allowed </li>
                        <li className="text-[#EDEDED] li">Up to <span className="text-[#FFF]"> 10 job roles </span>allowed</li>
                        <li className="text-[#EDEDED] li">Up to <span className="text-[#FFF]">5 location</span>  allowed</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6 items-start pb-6 border-b-1">
                        <p className="text-[32px] font-bold">{selected === "monthly" ? '$79' : '$940'}<span className="text-[#EDEDED] text-[16px] font-normal m-0">/month</span></p>
                        <Button
                            className="bg-[#fff] text-primary !w-full !h-[46px]"
                            text={"Get Started"}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-bold">Features</p>
                        <ul>
                            <li className="features-prof-li">Advanced shift scheduling</li>
                            <li className="features-prof-li">AI chat bot</li>
                            <li className="features-prof-li">Basic PTO tracking</li>
                            <li className="features-prof-li">Data visualization</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" bg-[#fff] flex flex-col gap-8 px-[30px] py-[40px] rounded-[18px] plan-card">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-[24px] font-semibold">Starter Plan</p>
                        <p className="text-[16px] text-[#606060]">Perfect for growing business</p>
                    </div>
                    <ul>
                        <li className="li">Up to <span> 25 users </span> allowed </li>
                        <li className="li">Up to <span> 5 job roles </span>allowed</li>
                        <li className="li">Up to <span>3 location</span>  allowed</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6 items-start pb-6 border-b-1">
                        <p className="text-[32px] font-bold">{selected === "monthly" ? '$29' : '$340'}<span className="text-[#606060] text-[16px] font-normal m-0">/month</span></p>
                        <Button
                            className="bg-primary !w-full !h-[46px]"
                            text={"Get Started"}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[16px] font-bold">Features</p>
                        <ul>
                            <li className="features-li">Expanded shift scheduling</li>
                            <li className="features-li">Group messaging & file sharing</li>
                            <li className="features-li">Track & prioritize tasks</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card