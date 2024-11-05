import { cn } from "../lib/utils";
const Container = ({ children, className = "" }) => {
  return (
    <div className={cn("px-20 2xl:px-36 sm:px-5 pt-12 pb-6 sm:pb-0 sm:pt-8 ", className)}>
      {children}
    </div>
  );
};

export default Container;
