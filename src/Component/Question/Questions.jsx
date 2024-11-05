import Row from "../Row";
import { LighterText, BigHeading } from "../Text";
import Container from "../Container";
import "../Question/Question.css"
import { useState } from "react";
import { arrowDown } from "../../Assets";

const Questions = ({ questions, responses }) => {
  if (!questions) return null;
  return (
    <Container className=" py-[78px] sm:py-[40px] relative">
      <div className="bg-[#F0F9C1] w-[400px] h-[400px] sm:w-[200px] sm:h-[200px] rounded-[50%] -z-10 box"></div>
      <Row className={"items-start md:flex-col md:gap-10"}>
        <div className="flex flex-col gap-[140px] md:gap-[23px] w-[50%] md:w-full">

          <div className="flex flex-col gap-[12px]">
            <BigHeading
              className={"text-[50px] font-semibold leading-[64px] sm:text-[24px] md:text-center sm:w-full sm:leading-[34px] sm:font-semibold"
              }
              text={"Get Quick Answers to Your Concerns."}
            />
            <LighterText
              className={"text-[24px] sm:text-[14px] md:text-center md:w-full"}
              text={
                "You can find the answers to some of your questions about SuprSync here"
              }
            />
          </div>

          <div className="w-[70%] md:w-full">
            <LighterText
              className={"text-[24px] sm:text-[14px] md:text-center md:w-full"}
              text={"Couldn’t find what you looking for? write to us at"}
            />

            <div>
              <img src={""} alt="" />
              <p className="text-[24px] text-[#00AD57] md:text-center sm:text-[14px]">help@suprsync.com</p>
            </div>
          </div>

        </div>

        <div className=" flex flex-col gap-[32px] w-[45%] md:w-full ">
          {questions.map((question, index) => (
            <Temp key={index} text={question} response={responses[index]} />
          ))}
        </div>
      </Row>
    </Container >
  );
};

const Temp = ({ text, response }) => {
  const [showResponse, setShowResponse] = useState(false);
  const toggleResponse = () => {
    setShowResponse(!showResponse);
  };


  return (
    <div className={`border border-[#C0CCCB] px-5 py-6 sm:py-4 flex flex-col justify-between items-start gap-[12px] rounded-[10px] ${showResponse ? 'bg-[#FCFEF3]' : ''}`}
    >
      <div className="flex flex-row justify-between items-start w-full">
        <LighterText
          className={"!text-[black] sm:font-semibold"}
          text={text}
        />

        <img className={`cursor-pointer ${showResponse ? 'rotate-180' : ''}`} src={arrowDown} onClick={toggleResponse} alt="arrow icon" />
      </div>

      {showResponse && (
        <LighterText className="!text-[black] sm:font-semibold" text={response} />
      )}
    </div>
  );
};

export default Questions;
