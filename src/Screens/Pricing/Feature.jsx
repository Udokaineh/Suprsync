import Container from "../../Component/Container";


const Features = () => {
  return (
    <Container className="mt-12 sm:mt-0">
      <div className="flex flex-col gap-[54px]">
        <div>
          <p className="text-[50px] leading-[64px] font-semibold">Newly Added Features</p>
          <p className="text-[24px] text-[#606060]">SuprSync now features integrations that seamlessly connect you to third-party services, enhancing efficiency and making your SuprSync experience even smoother.</p>
        </div>
        <div className="flex flex-row gap-[19px]">
          <img className="w-[414px] h-[422px] bg-[black]" src={""} alt="" />
          <img className="w-[414px] h-[422px] bg-[black]" src={""} alt="" />
          <img className="w-[414px] h-[422px] bg-[black]" src={""} alt="" />
        </div>

      </div>
    </Container>
  );
};

export default Features;
