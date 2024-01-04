import { FC, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
