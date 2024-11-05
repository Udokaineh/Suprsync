import Container from "../Container";
import { BigHeading, LighterText } from "../Text";
import Button from "../Button/Button";
import Logo from "../Logo";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { footer1, footer2 } from "../../Assets"
import { Link } from "react-router-dom"



const Footer = ({ withFooter }) => {
  return (
    <div className="flex flex-col gap-10">
      {withFooter ? (
        <>
          <Container className="!pt-[40px]">
            <div className="bg-[#EEFDED] h-[460px] relative sm:h-[332px] rounded-[26px] flex justify-between">
              <div className="flex items-end rounded-[26px]">
                <img className="rounded-[26px] sm:hidden" src={footer1} alt="" />
              </div>

              <div className="absolute py-[70px] flex flex-col gap-5 sm:gap-4 justify-center items-center md:px-[14px] w-full">
                <BigHeading
                  className={
                    "text-[#000] text-[48px] font-bold w-[75%] md:w-full sm:!text-[16px] text-center"
                  }
                  text={"Need a Custom Plan That Suits Your Business?"}
                />

                <LighterText className="text-center w-[78%] md:w-full text-[20px] sm:text-[12px]" text={"Join the ranks of successful businesses that have chosen SuprSync as their trusted partner. Contact us now to schedule a personalized demo or get a quote tailored to your needs."} />

                <Link to="/contact-us" className=" w-[134px] h-[55px] flex flex-row justify-center items-center">
                  <Button
                    className="!w-full !h-[55px] !bg-primary"
                    text={"Contact Us"}
                  />
                </Link>
              </div>

              <div className="rounded-[26px]">
                <img className="rounded-[26px] sm:hidden" src={footer2} alt="" />
              </div>
            </div>
          </Container>

          <div className="bg-[#F8FCF9]">
            <Container>
              <div className="flex flex-row md:flex-col items-start justify-between">

                <div className="flex flex-col justify-start gap-3 w-[25%] md:w-full md:flex-col items-startbg-558">
                  <Logo />

                  <div className="flex flex-col gap-5">
                    <p>Maximize your business potential with our SaaS technology.</p>
                    <div className="flex flex-row gap-5 text-[18px] w-[40%]">
                      <FaXTwitter color="#00AD57" />
                      <IoLogoInstagram color="#00AD57" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-start justify-between w-[60%] md:w-full md:grid md:grid-cols-2 md:mt-10 gap-8 md:gap-5 px-2">
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-semibold">Quick Links</p>
                    <div className="flex flex-col gap-3 text-[#6D6A6A]">
                      <Link to="/about"><p className="hover:text-[#035B2F]">About</p></Link>
                      <Link to="/use-cases"><p className="hover:text-[#035B2F]">Use cases</p></Link>
                      <Link to="/features"><p className="hover:text-[#035B2F]">Features</p></Link>
                      <Link to="/pricing"><p className="hover:text-[#035B2F]">Pricing</p></Link>
                      <Link to="/contact-us"><p className="hover:text-[#035B2F]">Contact Us</p></Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-semibold">Features</p>
                    <div className="flex flex-col gap-3 text-[#6D6A6A]">
                      <Link to="/features"><p className="hover:text-[#035B2F]">Features</p></Link>
                      <Link to="/pricing"><p className="hover:text-[#035B2F]">Pricing</p></Link>
                      <Link to="/contact-us"><p className="hover:text-[#035B2F]">Contact Us</p></Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[22px] sm:w-[200%] md:w-[150%]">
                    <p className="text-[16px] font-semibold">Subscribe to Newletter</p>
                    <div className="flex flex-row rounded-[60px] justify-between  bg-[#E7F1E9]">
                      <input type="email" placeholder="Enter Your Email" className="text-[##6A6A6A] bg-transparent pl-6 w-[70%] rounded-[60px]" />
                      <Button
                        className="bg-gradient-to-r from-[#00AD57] to-[#246E49] !w-[111px] !h-[46px]"
                        text={"Subscribe"}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </Container>

            <div className="px-[80px] sm:px-[20px] bg-[#035B2F] flex flex-row justify-between items-center py-4 sm:pb-3 mt-9">
              <LighterText
                className={"text-[16px] sm:text-[8px]  md:text-[12px] md:w-[40%] md:text-left !text-[#C5C5C5] text-center"}
                text={"Copyright © 2024 SuprSync. All rights reserved."}
              />
              <div className=" flex flex-row justify-end gap-[50px] sm:gap-2 sm:text-[8px] md:text-[12px] text-[#C5C5C5]">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Support</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-[#F8FCF9]">
          <Container className="!pb-0">
            <div className="flex flex-row md:flex-col items-start justify-between">

              <div className="flex flex-col justify-start gap-3 w-[25%] md:w-full md:flex-col items-startbg-558">
                <Logo />

                <div className="flex flex-col gap-5">
                  <p>Maximize your business potential with our SaaS technology.</p>
                  <div className="flex flex-row gap-5 text-[18px] w-[40%]">
                    <FaXTwitter color="#00AD57" />
                    <IoLogoInstagram color="#00AD57" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[60%] md:w-full md:grid md:grid-cols-2 md:mt-10 gap-8 md:gap-5 px-2">
                <div className="flex flex-col gap-4">
                  <p className="text-[16px] font-semibold">Quick Links</p>
                  <div className="flex flex-col gap-3 text-[#6D6A6A]">
                    <Link to="/about"><p className="hover:text-[#035B2F]">About</p></Link>
                    <Link to="/use-cases"><p className="hover:text-[#035B2F]">Use cases</p></Link>
                    <Link to="/features"><p className="hover:text-[#035B2F]">Features</p></Link>
                    <Link to="/pricing"><p className="hover:text-[#035B2F]">Pricing</p></Link>
                    <Link to="/contact-us"><p className="hover:text-[#035B2F]">Contact Us</p></Link>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-[16px] font-semibold">Features</p>
                  <div className="flex flex-col gap-3 text-[#6D6A6A]">
                    <Link to="/features"><p className="hover:text-[#035B2F]">Features</p></Link>
                    <Link to="/pricing"><p className="hover:text-[#035B2F]">Pricing</p></Link>
                    <Link to="/contact-us"><p className="hover:text-[#035B2F]">Contact Us</p></Link>
                  </div>
                </div>

                <div className="flex flex-col gap-[22px] sm:w-[200%] md:w-[150%]">
                  <p className="text-[16px] font-semibold">Subscribe to Newletter</p>
                  <div className="flex flex-row rounded-[60px] justify-between  bg-[#E7F1E9]">
                    <input type="email" placeholder="Enter Your Email" className="text-[##6A6A6A] bg-transparent pl-6 w-[70%] rounded-[60px]" />
                    <Button
                      className="bg-gradient-to-r from-[#00AD57] to-[#246E49] !w-[111px] !h-[46px]"
                      text={"Subscribe"}
                    />
                  </div>
                </div>

              </div>
            </div>
          </Container>

          <div className="px-[80px] sm:px-[20px] bg-[#035B2F] flex flex-row justify-between items-center py-4 sm:pb-3 mt-9">
            <LighterText
              className={"text-[16px] sm:text-[8px]  md:text-[12px] md:w-[40%] md:text-left !text-[#C5C5C5] text-center"}
              text={"Copyright © 2024 SuprSync. All rights reserved."}
            />
            <div className=" flex flex-row justify-end gap-[50px] sm:gap-2 sm:text-[8px] md:text-[12px] text-[#C5C5C5]">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Support</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
