import { ReactElement } from "react";
import  Footer  from "../Footer/Footer";
import {Navbar} from '../Navbar/Navbar'
interface IProps {
  children: ReactElement | ReactElement[];
}

const Wrapper = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer/>

    </>
  );
};

export default Wrapper;
