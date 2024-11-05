import { useState } from "react";
import Button from "../../Component/Button/Button";
import Header from "../../Component/Header/Header";
import Card from "./Card"


const Main = () => {
  const [selected, setSelected] = useState("monthly")

  const handleOptionChange = (option) => {
    setSelected(option)
  }

  return (
    <div className="flex flex-col justify-start items-center imagebackground">
      <Header />
      <div className="px-[80px] pt-[140px] flex flex-col justify-center gap-[50px] sm:px-6 sm:pt-[120px] sm:pb-[20px]">
        <div className="flex flex-row md:flex-col justify-between items-center md:items-start md:gap-[30px]">
          <div className="w-[60%] md:w-full flex flex-col gap-[12px]">
            <p className="text-[52px] font-semibold sm:text-[24px]">Plans That Fit Your Scale</p>
            <p className="text-[#606060] text-[24px] md:text-center sm:text-[14px]">At SuprSync, we believe in providing transparent and flexible pricing options to suit the needs of businesses of all sizes.</p>
          </div>
          <div className="w-fit md:w-full flex flex-row justify-center">
            <div className="flex flex-row rounded-[60px] justify-center bg-[#E7F1E9] w-fit">
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
        </div>

        <Card selected={selected} />
      </div>
    </div>
  );
};

export default Main;
