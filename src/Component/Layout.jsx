import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { cn } from "../lib/utils";

const Layout = ({ children, className = "", withFooter = true, withHeader = false }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {withHeader && <Header />}

      <div className={cn(withHeader ? 'mt-20 sm:mt-10' : '')}>{children}</div>

      <Footer withFooter={withFooter} />
    </div>
  );
};

export default Layout;
