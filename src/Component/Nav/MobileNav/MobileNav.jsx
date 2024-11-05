import MobileNavItem from "./MobileNavItem";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const MobileNav = ({ setToggleMenu }) => {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
      className="border-t-1 border-black bg-white z-50 fixed h-full top-16 w-full hidden md:flex flex-col py-3 px-3"
    >
      <LiaTimesSolid
        onClick={() => setToggleMenu(false)}
        size={24}
        className="self-end"
      />
      <div className="flex flex-col gap-3">
        <MobileNavItem text={"Home"} active={"/"} />
        <MobileNavItem text={"About"} active={"/about"} />
        <MobileNavItem text={"Features"} active={"/features"} />
        <MobileNavItem text={"Use cases"} active={"/use-cases"} />
        <MobileNavItem text={"Pricing"} active={"/pricing"} />
        <MobileNavItem text={"Contact Us"} active={"/contact-us"} />
      </div>
    </motion.div>
  );
};

export default MobileNav;
