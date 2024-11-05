import { useState } from "react"
import Container from "../../Component/Container"
import Button from "../../Component/Button/Button"

const Plan = () => {
    const [selected, setSelected] = useState("monthly")

    const handleOptionChange = (option) => {
        setSelected(option)
    }

    return (
        <Container className="py-[60px]">
            <div className="rounded-[36px] flex flex-col justify-center items-center gap-[85px] sm:gap-[38px]">

                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <p className="text-[50px] text-center text-[#000] font-medium leading-[64px] sm:text-[24px] sm:leading-[34px]">Choose the right plan for your business</p>
                        <p className="text-[#606060] text-[24px] text-center sm:text-[14px]">Find the perfect plan tailored to meet your business needs and goals.</p>
                    </div>

                    <div className="flex flex-row rounded-[60px] bg-[#E7F1E9] w-fit">
                        <Button
                            type={selected === "monthly" ? "fill" : "outline"}
                            className="!w-[111px] !h-[46px]"
                            text={"Monthly"}
                            onClick={() => handleOptionChange("monthly")}
                        />
                        <Button
                            type={selected === "yearly" ? "fill" : "outline"}
                            className="!w-[111px] !h-[46px]"
                            text={"Yearly"}
                            onClick={() => handleOptionChange("yearly")}
                        />
                    </div>
                </div>

                <div className="flex flex-row md:flex-col justify-center items-center gap-[40px] w-full">
                    <div className="flex flex-col gap-8 px-[30px] py-[40px] rounded-[18px] plan-card">
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

                    <div className="flex flex-col gap-8 px-[30px] py-[40px] bg-[#057E42] text-[#fff] rounded-[18px] plan-card">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
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
                                    className="bg-[#fff] hover:bg-[#fff] text-primary !w-full !h-[46px]"
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

                    <div className="bg-[#fff] flex flex-col gap-8 px-[30px] py-[40px] rounded-[18px] plan-card">
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
            </div>
        </Container>
    )
}

export default Plan