import { cn } from "../../lib/utils";
import { playIcon } from "../../Assets";

const Button = ({
  text,
  type = "fill",
  className = "",
  withIcon = false,
  onClick = () => {},
}) => {
  return (
    <>
      {type === "fill" ? (
        <button
          onClick={onClick}
          className={cn(
            "w-[78px] h-[38px] flex justify-center gap-2 items-center bg-primary font-bold text-white rounded-[40px] border border-[#057E42] hover:bg-[#109854]",
            className
          )}
        >
          <p>{text}</p>
          {withIcon && <img src={playIcon} alt="play icon" />}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={cn(
            "w-[78px] h-[38px] flex justify-center gap-2 items-center border-1 font-bold border-4F9 text-black rounded-[40px] hover:border-[#109854]",
            className
          )}
        >
          <p>{text}</p>
          {withIcon && <img src={playIcon} alt="play icon" />}
        </button>
      )}
    </>
  );
};

export default Button;
