import { FC, ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type UserLayoutType = {
  children: ReactNode;
};

const UserLayout: FC<UserLayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
