import Logo from "../Logo";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import MobileNav from "../Nav/MobileNav/MobileNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  document.body.style.overflow = toggleMenu ? "hidden" : "auto";

  return (
    <div className="flex justify-center items-center pt-[40px] fixed w-full md:px-[38px] md:py-[14px] z-50 bg-[white]">

      <div className="flex justify-between items-center px-[16px] border border-9F0 drop-shadow-sm rounded-[40px] w-[923px] md:flex-row-reverse md:px-2 md:pr-4 h-16 bg-white">

        <div className="md:w-[60%]">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="flex justify-end items-center gap-6">
          <Nav />

          <div className="flex gap-3 md:hidden">
            {/* <Link to={"https://app.nitroserve.co"}>
              <Button text="Log in" />
            </Link> */}

            <Link to={"https://app.nitroserve.co/signup"}>
              <Button className="text-[12px]" text="Sign up" />
            </Link>
          </div>

          <TbMenu2
            className="hidden md:block"
            size={28}
            onClick={() => setToggleMenu((prev) => !prev)}
          />
        </div>

      </div>
      <div className="h-8 lg:hidden" />
      <AnimatePresence>
        {toggleMenu && <MobileNav setToggleMenu={setToggleMenu} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
